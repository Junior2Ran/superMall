import React from 'react';
import {WhiteSpace,Flex,Modal,List,Button} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
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

    componentWillMount() {
        
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

    payCharge() {
        wx.chooseWXPay({
            timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: '', // 支付签名随机串，不长于 32 位
            package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: '', // 支付签名
            success: function (res) {
                // 支付成功后的回调函数
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
                    <img src="./images/4.png" />
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
