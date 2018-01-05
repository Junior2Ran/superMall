import React from 'react';
import { InputItem } from 'antd-mobile';
import Card from "../../../../components/card/index.jsx";
import Submit from "../../../../components/submit/index.jsx";

export default class AddAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return <div>
            <Card>
                <InputItem placeholder="请输入优惠券码">优惠券码</InputItem>
            </Card>
            <Submit onClick={this.props.history.goBack}>
                确认添加
            </Submit>
        </div>
    }
}
