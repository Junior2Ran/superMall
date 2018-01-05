import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import {Flex,WingBlank,Badge} from 'antd-mobile';
import './index.less';

export default class My extends React.Component {
    
    render() {
        return <Layout footer={true}>
            <div className="my_header">
                <img className="my_header_img" src="./images/zz_help_smile.png" />
                <div className="my_header_text">用户名在这儿</div>
            </div>
            <Card>
                <div className="card_group">
                    <Link to={{pathname:"/order", state:{title:'all', sub:0} }}>
                        <WingBlank>
                            <span>我的订单</span>
                            <span className="my_content_right">全部订单></span>
                        </WingBlank>
                    </Link>
                </div>
                <div className="card_group">
                    <Flex style={{textAlign:'center'}}>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'unpay', sub:1} }}>
                            <Badge text={1}>待付款</Badge>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'unacc', sub:2} }}>
                            待收货
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'refund', sub:3} }}>
                            退换修
                        </Link></Flex.Item>
                    </Flex>
                </div>
            </Card>

            <Card>
                {/*<div className="card_group">
                    <WingBlank>
                        <span>会员福利</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>*/}
                <div className="card_group">
                    <Link to="/discount">
                        <WingBlank>
                            <span>我的优惠券</span>
                            <span className="my_content_right">></span>
                        </WingBlank>
                    </Link>
                </div>
            </Card>

{/*            <Card>
                <div className="card_group">
                    <WingBlank>
                        <span>服务中心</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
                <div className="card_group">
                    <WingBlank>
                        <span>你我的家</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>

            <Card>
                <div className="card_group">
                    <WingBlank>
                        <span>投诉举报</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>

            <Card>
                <div className="card_group">
                    <WingBlank>
                        <span>设置</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>*/}
        </Layout>
    }
}
