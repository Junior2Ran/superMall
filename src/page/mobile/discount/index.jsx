import React from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Submit from "../../../components/submit/index.jsx";
const Item = List.Item;
const Brief = Item.Brief;

export default class Discount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return <Layout header={false} footer={false}>
            <List renderHeader={() => '我的优惠券'}>
                <Item multipleLine onClick={() => {}} extra="2018-07-01到期">
                    ￥500 <Brief>家电类满10000可用</Brief>
                </Item>
                <Item multipleLine onClick={() => {}} extra="2018-07-01到期">
                    ￥500 <Brief>家电类满10000可用</Brief>
                </Item>
                <Item multipleLine onClick={() => {}} extra="2018-07-01到期">
                    ￥500 <Brief>家电类满10000可用</Brief>
                </Item>
            </List>
            <Submit><Link to="/discount/add">添加优惠券</Link></Submit>
        </Layout>
    }
}
