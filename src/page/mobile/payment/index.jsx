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
            <Card>
                <Link to="/payment/address">收货地址</Link>
            </Card>
            <Card>商品</Card>
            <Card>折扣和付款</Card>
        </Layout>
    }
}

// export default LoadingHoc(Payment);
