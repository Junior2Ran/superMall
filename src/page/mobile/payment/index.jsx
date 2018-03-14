import React from 'react';
import {WhiteSpace,Flex,Modal,List,Button} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import {wxconfig} from "../../../config.jsx";
import wxApi from "../../../api/weixin.jsx";
import paymentApi from "../../../api/payment.jsx";
import './index.less';
import orderApi from "../../../api/sxhorder.jsx";

export default class Payment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {},
            discount: 0,
            ship_fee: 12,
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
                jsApiList: ["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage"]
            });  
        });
    }

    componentDidMount() {
        wx.ready(function(){
            wx.checkJsApi({
                jsApiList: ['chooseWXPay',"onMenuShareTimeline","onMenuShareAppMessage"],
                success: function(res) {
                    console.log(res)
                }
            });
        });
        wx.error(function(res){
            console.log('wx.error');
            console.log(res);
        });
        this.requestData();
    }

    requestData() {
        const orderid = this.props.location.query || localStorage.getItem("nowOrderId");
        if (this.props.location.query) {
            localStorage.setItem("nowOrderId", this.props.location.query);
        }
        orderApi.getOrder(orderid, (rs)=>{
            this.setState({
                data: rs.data
            })
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

    generateProducts() {
        const data = this.state.data;
        let vdom = [];

        for(var i in data.products) {
            vdom.push(<Card className="payment_card clearfix" key={i}>
                <div className="payment_card_img">
                    <img src={data.products[i].cover_img} />
                </div>
                <div className="payment_card_text">
                    <div className="title_text">{data.products[i].name}</div>
                    <div className="num_text">数量：{data.products[i].amount}</div>
                    <div className="price_text">￥{data.products[i].price}</div>
                </div>
            </Card>);
        }

        vdom.push(<Card className="payment_card" key='000'>
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
                    <div className="discount_select price_text">￥{data.cost}</div>
                    <div className="discount_title">商品金额</div>
                    <div className="discount_select price_text">+￥{this.state.ship_fee}</div>
                    <div className="discount_title">运费</div>
                    <div className="discount_select price_text total">￥{parseInt(data.cost) + parseInt(this.state.ship_fee) - parseInt(this.state.discount)}</div>
                </div>
            </div>
            <div className="bigbutton" onClick={this.payCharge.bind(this)}>确认支付</div>
            <div className="bigbutton cancel" onClick={this.props.history.goBack}>取消付款</div>
        </Card>);

        return vdom;
    }

    render() {
        return <Layout header={false} footer={false}>
            <Card className="payment_card">
                <Link to="/address">
                    <div>何东燃 13041017126</div>
                    <div>北京市海淀区西土城路10号北京邮电大学</div>
                </Link>
            </Card>

            {this.generateProducts()}

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
