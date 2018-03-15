import React from 'react';
import { TextareaItem, List, Card, Tag, Flex } from 'antd-mobile';
import Submit from "../../../components/submit/index.jsx";
// import './index.less';
import orderApi from "../../../api/sxhorder.jsx";

export default class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 2,
            data: {}
        };
    }

    static contextTypes = {  
        router: React.PropTypes.object
    } 
    
    componentDidMount() {
        this.requestData();
    }

    requestData() {
        const orderid = this.props.location.query;
        console.log(orderid)
        orderApi.getOrder(orderid, (rs)=>{
            this.setState({
                data: rs.data
            })
        });
    }

    commentOrder() {
        const orderid = this.props.location.query;
        orderApi.commentOrder(orderid, (rs)=>{
            this.props.history.goBack();
        });
    }

    render(){
        const score = this.state.score;
        const product = this.state.data.products && this.state.data.products[0];
        const name = product && product.name;
        const url = product && product.cover_img;
        console.log(this.state.data)
        return <div>
            <Card full>
              <Card.Header
                title={name}
                thumb={<img src={url} style={{width:'20%'}}/>}
                
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
                    rows={4}
                />
            </List>

            <Submit onClick={this.commentOrder.bind(this)}>确认评价</Submit>
        </div>
    }
}
