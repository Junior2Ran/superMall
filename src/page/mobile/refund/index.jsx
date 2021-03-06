import React from 'react';
import { TextareaItem, List, Tag, Flex } from 'antd-mobile';
import Submit from "../../../components/submit/index.jsx";
import Card from "../../../components/card/index.jsx";
import './index.less';

export default class Refund extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 2
        };
    }
    
    render(){
        const score = this.state.score;
        return <div>
            <Card className="refund_card">
                <Flex>
                    <Flex.Item style={{flex:'0 0 20%'}}>服务类型</Flex.Item>
                    <Flex.Item>
                        <Flex justify="around">
                            <Tag selected={score === 2} onChange={() => {this.setState({score: 2});}}>退货</Tag>
                            <Tag selected={score === 1} onChange={() => {this.setState({score: 1});}}>换货</Tag>
                            <Tag selected={score === 0} onChange={() => {this.setState({score: 0});}}>维修</Tag>
                        </Flex>
                    </Flex.Item>
                </Flex>
            </Card>
            <Card className="refund_card">
                <Flex>
                    <Flex.Item style={{flex:'0 0 20%'}}><img src="https://wfshop.andysheng.cn/img/product1/cover-1.jpg" style={{width:'100%'}} /></Flex.Item>
                    <Flex.Item>
                        <div className="title_text">小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待</div>
                        <div className="price_text">￥699.00</div>
                    </Flex.Item>
                </Flex>
            </Card>
            <List renderHeader={() => '问题描述'}>
                <TextareaItem 
                    placeholder="请输入您遇到问题的描述..."
                    autoHeight
                    rows={4}
                />
            </List>

            <Submit onClick={this.props.history.goBack}>提交申请</Submit>
        </div>
    }
}
