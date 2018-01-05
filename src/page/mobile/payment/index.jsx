import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import './index.less';

export default class Payment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
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
                        <div className="discount_select">暂无可用</div>
                        <div className="discount_title">优惠券</div>
                    </div>
                    <div className="discount clearfix">
                        <div className="discount_select price_text">￥5000.00</div>
                        <div className="discount_title">商品金额</div>
                        <div className="discount_select price_text">+￥0.00</div>
                        <div className="discount_title">运费</div>
                        <div className="discount_select price_text total">￥5000.00</div>
                    </div>
                </div>
                <div className="bigbutton">确认支付</div>
                <Link className="bigbutton cancel" to="/cart">取消付款</Link>
            </Card>
        </Layout>
    }
}

// export default LoadingHoc(Payment);
