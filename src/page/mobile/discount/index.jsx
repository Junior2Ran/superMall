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
            <List renderHeader={() => <div><div className="iconH iconH_inline icon_ticket" style={{margin:'0 5',height:'16'}}></div>未使用</div>}>
                <Item multipleLine onClick={() => {}} extra="50元代金券">
                    <div className="iconH iconH_inline icon_calendar" style={{margin:'0 5'}}></div>携程飞机票
                </Item>
                <Item multipleLine onClick={() => {}} extra="8折优惠券">
                    <div className="iconH iconH_inline icon_pie" style={{margin:'0 5'}}></div>儿童拼图店
                </Item>
                <Item multipleLine onClick={() => {}} extra="10元代金券">
                    <div className="iconH iconH_inline icon_await" style={{margin:'0 5'}}></div>捷安特自行车
                </Item>
            </List>
            <List renderHeader={() => <div><div className="iconH iconH_inline icon_ticket" style={{margin:'0 5',height:'16'}}></div>已使用</div>}>
                <Item multipleLine disabled extra="30元代金券">
                    <div className="iconH iconH_inline icon_deliver" style={{margin:'0 5'}}></div>水滴食品店
                </Item>
            </List>
            <List renderHeader={() => <div><div className="iconH iconH_inline icon_ticket" style={{margin:'0 5',height:'16'}}></div>已过期</div>}>
                <Item multipleLine disabled extra="10元代金券">
                    <div className="iconH iconH_inline icon_comment" style={{margin:'0 5'}}></div>小绿植株店
                </Item>
                <Item multipleLine disabled extra="20元代金券">
                    <div className="iconH iconH_inline icon_pay" style={{margin:'0 5'}}></div>小明文具店
                </Item>
            </List>
            <Submit><Link to="/discount/add">添加优惠券</Link></Submit>
        </Layout>
    }
}
