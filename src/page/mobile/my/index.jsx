import React from 'react';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import {Flex,WingBlank} from 'antd-mobile';
import './index.less';

export default class My extends React.Component {
    
    render() {
        return <Layout footer={true}>
            <div className="my_header">
                <img className="my_header_img" src="./images/zz_help_smile.png" />
                <div className="my_header_text">登录 / 注册</div>
            </div>
            <Card>
                <div style={{borderBottom:'1px solid #ccc'}}>
                    <WingBlank>
                        <span>我的订单</span>
                        <span className="my_content_right">全部订单></span>
                    </WingBlank>
                </div>
                <Flex style={{textAlign:'center'}}>
                    <Flex.Item>待付款</Flex.Item>
                    <Flex.Item>待收货</Flex.Item>
                    <Flex.Item>退换修</Flex.Item>
                </Flex>
            </Card>

            <Card>
                <div style={{borderBottom:'1px solid #ccc'}}>
                    <WingBlank>
                        <span>会员福利</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
                <div>
                    <WingBlank>
                        <span>我的优惠</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>

            <Card>
                <div style={{borderBottom:'1px solid #ccc'}}>
                    <WingBlank>
                        <span>服务中心</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
                <div>
                    <WingBlank>
                        <span>你我的家</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>

            <Card>
                <div>
                    <WingBlank>
                        <span>投诉举报</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>

            <Card>
                <div>
                    <WingBlank>
                        <span>设置</span>
                        <span className="my_content_right">></span>
                    </WingBlank>
                </div>
            </Card>
        </Layout>
    }
}
