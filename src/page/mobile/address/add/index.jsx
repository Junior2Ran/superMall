import React from 'react';
import { InputItem, TextareaItem, Modal } from 'antd-mobile';
const alert = Modal.alert;
import Card from "../../../../components/card/index.jsx";
import Submit from "../../../../components/submit/index.jsx";
import userApi from "../../../../api/sxhuser.jsx";

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

    addShipAddress() {
        const {name,phone,province,city,detail} = this.state;
        if (name&&phone&&province&&city&&detail) {
            userApi.addShipAddress(name,phone,province,city,detail,(rs)=>{
                this.props.history.goBack();
            });
        } else {
            this.showAlert("请填写所有字段！")
        }
    }

    showAlert(msg) {
        const alertInstance = alert(msg, '', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () => console.log('ok') },
        ]);
    }

    render(){
        console.log(this.state)
        return <div>
            <Card>
                <InputItem
                    placeholder="姓名"
                    onChange={(val)=>{this.setState({name: val})}}
                >收货人</InputItem>
                <InputItem 
                    type="phone"
                    placeholder="手机号码"
                    onChange={(val)=>{this.setState({phone: val})}}
                >联系方式</InputItem>
                <InputItem
                    placeholder="填写所在省"
                    onChange={(val)=>{this.setState({province: val})}}
                >所在省</InputItem>
                <InputItem
                    placeholder="填写所在市"
                    onChange={(val)=>{this.setState({city: val})}}
                >所在市</InputItem>
                <TextareaItem
                    title="详细地址"
                    rows={3}
                    placeholder="填写详细的楼层或房间号信息"
                    onChange={(val)=>{this.setState({detail: val})}}
                />
            </Card>
            <Submit onClick={this.addShipAddress.bind(this)}>
                确认添加
            </Submit>
        </div>
    }
}
