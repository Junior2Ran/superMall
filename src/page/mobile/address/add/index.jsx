import React from 'react';
import { InputItem, TextareaItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Card from "../../../../components/card/index.jsx";
import Submit from "../../../../components/submit/index.jsx";

export default class AddAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            province: '',
            city: '',
            detail: ''
        };
    }

    render(){
        return <div>
            <Card>
                <InputItem
                    placeholder="姓名"
                >收货人</InputItem>
                <InputItem 
                    type="phone"
                    placeholder="手机号码"
                >联系方式</InputItem>
                <InputItem
                    placeholder="填写所在区域"
                >所在地区</InputItem>
                <TextareaItem
                    title="详细地址"
                    rows={3}
                    placeholder="填写详细的楼层或房间号信息"
                />
            </Card>
            <Submit>
                <Link to="/payment">确认添加</Link>
            </Submit>
        </div>
    }
}
