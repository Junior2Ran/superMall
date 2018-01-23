import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import {Flex,WingBlank,Badge} from 'antd-mobile';
import {wxconfig} from "../../../config.jsx";
import './index.less';

export default class My extends React.Component {
    componentWillMount() {
        this.nickname = localStorage.getItem("nickname");
        this.headimgurl = localStorage.getItem("headimgurl");
    }

    render() {
        return <Layout footer={true}>
            <div className="my_header">
                <Flex>
                    <Flex.Item style={{flex:'0 0 20%'}}>
                        <img className="my_header_img" src={this.headimgurl ? this.headimgurl : "./images/zz_help_smile.png"}/>
                    </Flex.Item>
                    <Flex.Item style={{flex:'0 0 20%'}}>
                        <div className="my_header_text">
                            {this.nickname ? this.nickname : <a href={wxconfig.redirectUri} style={{color:"#fff"}}>点击登录</a>}
                        </div>
                        <Link to={{pathname:'/my/tel'}}>
                            <div className="my_header_text">
                                <img src="./images/icons/手机.png" style={{width:'20%'}}/>
                                未绑定
                            </div>
                        </Link>
                    </Flex.Item>
                </Flex>
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
                    <Flex style={{textAlign:'center',height:'5rem'}}>
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
                <div className="card_group">
                    <Link to={{pathname:"/discount"}}>
                        <WingBlank>
                            <span>我的优惠</span>
                            <span className="my_content_right">全部优惠券></span>
                        </WingBlank>
                    </Link>
                </div>
                <div className="card_group">
                    <Flex style={{textAlign:'center',height:'5rem'}}>
                        <Flex.Item><Link to={{pathname:"/discount"}}>
                            <span style={{lineHeight:1}}><div className="iconH icon_ticket"></div>优惠券(6)</span>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/discount"}}>
                            <span style={{lineHeight:1}}><div className="iconH icon_ticket"></div>未使用(3)</span>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/discount"}}>
                            <span style={{lineHeight:1}}><div className="iconH icon_ticket"></div>已使用(1)</span>
                        </Link></Flex.Item>
                        <Flex.Item><Link to={{pathname:"/discount"}}>
                            <span style={{lineHeight:1}}><div className="iconH icon_ticket"></div>已过期(2)</span>
                        </Link></Flex.Item>
                    </Flex>
                </div>
            </Card>

            <Card>
                <div className="card_group">
                    <WingBlank>
                        <span>微商分成区</span>
                    </WingBlank>
                </div>
                <div className="card_group">
                    <Link to={{pathname:"/profitshare/daily"}}>
                        <WingBlank>
                            <div className="iconH iconH_inline icon_pie" style={{marginRight:'10px'}}></div><span>日分成</span>
                            <span className="my_content_right">￥102 ></span>
                        </WingBlank>
                    </Link>
                </div>
                <div className="card_group">
                    <Link to={{pathname:"/profitshare/total"}}>
                        <WingBlank>
                            <div className="iconH iconH_inline icon_calendar" style={{marginRight:'10px'}}></div><span>总分成</span>
                            <span className="my_content_right">￥1028 ></span>
                        </WingBlank>
                    </Link>
                </div>
                <div className="card_group">
                    <Link to={{pathname:"/profitshare/remain"}}>
                        <WingBlank>
                            <div className="iconH iconH_inline icon_await" style={{marginRight:'10px'}}></div><span>待分成</span>
                            <span className="my_content_right">2单 ></span>
                        </WingBlank>
                    </Link>
                </div>
            </Card>

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
