import React from 'react';
import {WhiteSpace,Flex,Modal,List,Button} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import wxApi from "../../../api/weixin.jsx";
import paymentApi from "../../../api/payment.jsx";
import './index.less';

export default class Payment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            discount: 0,
            ship_fee: 0,
            payment_price: 5000,
            modal: false
        };
    }

    static contextTypes = {  
        router: React.PropTypes.object
    } 
    
    componentWillMount() {
        const url = encodeURIComponent(window.location.href.split('#')[0]);
        wxApi.postJsApiData(url, (rs) => {
            const data = rs.result;
            wx.config({  
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
                appId: data.appId, // 必填，公众号的唯一标识  
                timestamp: data.timestamp, // 必填，生成签名的时间戳  
                nonceStr: data.nonceStr, // 必填，生成签名的随机串  
                signature: data.signature, // 必填，签名，见附录1  
                jsApiList: ["chooseWXPay","chooseImage","onMenuShareTimeline"]
            });  
        });
    }

    componentDidMount() {
        wx.ready(function(){
            wx.checkJsApi({
                jsApiList: ['chooseWXPay',"chooseImage","onMenuShareTimeline"],
                success: function(res) {
                    console.log(res)
                }
            });
        });
        wx.error(function(res){
            console.log('wx.error');
            console.log(res);
        });
    }

    showModal() {
        this.setState({modal: true});
    }

    hideModal() {
        this.setState({modal: false});
    }

    onClickDiscount(discount) {
        this.setState({
            discount: discount.value
        }, () => {
            this.hideModal(); 
        });
    }

    // 微信支付接口
    onBridgeReady() {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
               "appId": this.appId,             //公众号名称，由商户传入     
               "timeStamp": this.timestamp,     //时间戳，自1970年以来的秒数     
               "nonceStr": this.nonceStr,       //随机串     
               "package": this.package,     
               "signType": this.signType,       //微信签名方式：     
               "paySign": this.paySign          //微信签名 
            },
            function(res){     
                if(res.err_msg == "get_brand_wcpay_request:ok") {
                    this.context.router.history.push('payment/result');
                }
            }
        );
    }

    payCharge() {
        const openid = localStorage.getItem("openid");
        // const openid = 'ocgJPv1kyOAGEJbNYlhmOry7lgBg';
        const fee = '1';
        paymentApi.postCharge(fee, openid, (rs) => {
            this.appId = rs.result.appId;
            this.nonceStr = rs.result.nonceStr;
            this.package = rs.result.package;
            this.paySign = rs.result.paySign;
            this.signType = rs.result.signType;
            this.timestamp = rs.result.timestamp;             
            
            // 调起微信支付接口
            if (typeof WeixinJSBridge == "undefined") {
                if ( document.addEventListener ) {
                    document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady); 
                    document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
                }
            } else {
                this.onBridgeReady();
            }
        });
    }

    render() {
        return <Layout header={false} footer={false}>
            <Card className="payment_card">
                <Link to="/address">
                    <div>何东燃 13041017126</div>
                    <div>北京市海淀区西土城路10号北京邮电大学</div>
                </Link>
            </Card>

            <Card className="payment_card clearfix">
                <div className="payment_card_img">
                    <img src="./images/hdr4.png" />
                </div>
                <div className="payment_card_text">
                    <div className="title_text">IPhone X 16G 2009限量版 现货</div>
                    <div className="small_text">红色 / 16G</div>
                    <div className="num_text">数量：1</div>
                    <div className="price_text">￥5000</div>
                </div>
            </Card>

            <Card className="payment_card">
                <div>
                    {/*<div className="discount">
                        <div className="discount_select">个人 明细</div>
                        <div className="discount_title">发票信息</div>
                    </div>*/}
                    <div className="discount">
                        <div className="discount_select" onClick={this.showModal.bind(this)}>{this.state.discount ? `-￥${this.state.discount}` : '暂不使用'}</div>
                        <div className="discount_title">优惠券</div>
                    </div>
                    <div className="discount clearfix">
                        <div className="discount_select price_text">￥{this.state.payment_price}</div>
                        <div className="discount_title">商品金额</div>
                        <div className="discount_select price_text">+￥{this.state.ship_fee}</div>
                        <div className="discount_title">运费</div>
                        <div className="discount_select price_text total">￥{this.state.payment_price + this.state.ship_fee - this.state.discount}</div>
                    </div>
                </div>
                <div className="bigbutton" onClick={this.payCharge.bind(this)}>确认支付</div>
                <div className="bigbutton cancel" onClick={this.props.history.goBack}>取消付款</div>
            </Card>
            <Modal
                popup
                visible={this.state.modal}
                onClose={()=>{this.hideModal && this.hideModal('close')}}
                animationType="slide-up"
            >
                <List renderHeader={() => <div>选择优惠券</div>} className="popup-list">
                    <List.Item onClick={() => {this.onClickDiscount({value:0})}}>暂不使用</List.Item>
                    {data.map((discount, index) => (
                        <List.Item multipleLine key={index} extra={`${discount.time}到期`} onClick={() => {this.onClickDiscount(discount)}}>
                            ￥{discount.value}
                        </List.Item>
                    ))}
                </List>
            </Modal>
        </Layout>
    }
}

// export default LoadingHoc(Payment);
const data = [
    {
        value: '500',
        time: '2018-07-01',
    }, {
        value: '500',
        time: '2018-07-01',
      },
      {
        value: '500',
        time: '2018-07-01',
    },
];
