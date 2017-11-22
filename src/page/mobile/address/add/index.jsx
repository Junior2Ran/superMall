import React from 'react';
import {InputItem} from 'antd-mobile';
import Card from "../../../../components/card/index.jsx";
import Submit from "../../../../components/submit/index.jsx";

export default class AddAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
        };
    }

    render(){
        return <div>
            <Card>
                <InputItem>收货人</InputItem>
                <InputItem 
                    type="phone"
                    placeholder="input your phone"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.phone}
                >联系方式</InputItem>
            </Card>
            <Submit>确认添加</Submit>
        </div>
    }
}
