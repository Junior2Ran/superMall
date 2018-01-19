import React from 'react';
import { TextareaItem, List, Card, Tag, Flex } from 'antd-mobile';
import Submit from "../../../components/submit/index.jsx";
// import './index.less';

export default class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 2
        };
    }
    
    render(){
        const score = this.state.score;
        return <div>
            <Card full>
              <Card.Header
                title="华为 HUAWEI Mate9 Pro （LON-AL00）6GB+128GB 琥珀金"
                thumb={<img src="/images/hdr4.png" style={{width:'20%'}}/>}
                
              />
              <Card.Body>
                <Flex justify="around">
                    <Tag selected={score === 2} onChange={() => {this.setState({score: 2});}}>好评</Tag>
                    <Tag selected={score === 1} onChange={() => {this.setState({score: 1});}}>中评</Tag>
                    <Tag selected={score === 0} onChange={() => {this.setState({score: 0});}}>差评</Tag>
                </Flex>
              </Card.Body>
            </Card>
            <List renderHeader={() => '评论'}>
                <TextareaItem 
                    placeholder="请输入您的评论..."
                    autoHeight
                    count={100}
                    rows={4}
                />
            </List>

            <Submit onClick={this.props.history.goBack}>确认评价</Submit>
        </div>
    }
}
