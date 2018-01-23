import React from 'react';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import Infocard from "./infocard.jsx";
import './index.less';

export default class Profitshare extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            headerName: '',
            headerValue: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
        const type = this.props.match.params.type;
        switch (type) {
            case 'daily':
                this.setState({
                    headerName: '今日分成总额',
                    headerValue: '￥16'
                });
                break;
            case 'total':
                this.setState({
                    headerName: '累计分成总额',
                    headerValue: '￥16'
                });
                break;
            case 'remain':
                this.setState({
                    headerName: '待分成订单数量',
                    headerValue: '2单'
                });
                break;
            default:
                break;
        }
    }

    render() {
        return <Layout header={false} footer={false}>
            <Card className="profitshare_infocard">
                <Flex justify="around">
                    <div>{this.state.headerName}</div>
                    <div>{this.state.headerValue}</div>
                </Flex>
            </Card>
            <Infocard data={data} />
            <Infocard data={data} />
        </Layout>
    }
}

const data = {
    time: '2017-06-07 18:23:09',
    user_name: 'toby_20121118',
    product_name: '帝王企鹅茶叶蛋',
    shop_name: '鸡蛋专卖店',
    total_fee: '80',
    share_fee: '8'
}
