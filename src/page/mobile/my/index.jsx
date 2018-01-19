import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import {Flex,WingBlank,Badge} from 'antd-mobile';
import './index.less';

export default class My extends React.Component {
    componentWillMount() {
        this.nickname = localStorage.getItem("nickname");
        this.headimgurl = localStorage.getItem("headimgurl");
    }

    render() {
        return <Layout footer={true}>
            <div className="my_header">
                <img className="my_header_img" src={this.headimgurl ? this.headimgurl : "./images/zz_help_smile.png"}/>
                <div className="my_header_text">
                    {this.nickname ? this.nickname : <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6d6fd71af24c22c3&redirect_uri=http://supermall.junior2ran.cn/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect" style={{color:"#fff"}}>点击登录</a>}
                </div>
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
                    <Flex style={{textAlign:'center',height:'6rem'}}>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'unpay', sub:1} }}>
                            <Badge text={1}>
                                <div className="iconH icon_pay"></div>待付款
                            </Badge>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'unacc', sub:2} }}>
                            <span style={{lineHeight:1}}><div className="iconH icon_deliver"></div>待收货</span>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'uncmt', sub:3} }}>
                            <span style={{lineHeight:1}}><div className="iconH icon_comment"></div>待评价</span>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/order", state:{title:'refund', sub:4} }}>
                            <span style={{lineHeight:1}}><div className="iconH icon_repair"></div>退换修</span>
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

            {/*<Card>
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
            </Card>*/}

            <Card>
                <div className="card_group">
                    <Link to="/address">
                        <WingBlank>
                            <span>收货地址管理</span>
                            <span className="my_content_right">></span>
                        </WingBlank>
                    </Link>
                </div>
            </Card>
        </Layout>
    }
}
