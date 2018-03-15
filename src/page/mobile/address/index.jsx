import React from 'react';
import { Toast, InputItem } from 'antd-mobile';
import Card from "../../../components/card/index.jsx";
import Submit from "../../../components/submit/index.jsx";
import ship_data from "../../../static/data/user_ship_address.js";   //mock假数据
import './index.less';
import userApi from "../../../api/sxhuser.jsx";

export default class Address extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shipData: [],
            checkid: JSON.parse(localStorage.getItem("address")) ? JSON.parse(localStorage.getItem("address")).id : 1,
            isLoading: true
        };
    }

    static contextTypes = {  
        router: React.PropTypes.object
    }  

    componentDidMount() {
        this.requestRealData();
    }

    requestMockData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
            const data = ship_data.data;     //mock data
            if (!data.length) {
                Toast.offline('您还没有地址，去添加一个吧！', 1, ()=>{
                    this.linkTo('address/add');
                });
            } else {
                this.setState({
                    shipData: data,
                    isLoading: false
                });
            }
        }, 100);
    }

    requestRealData() {
        userApi.getShipAddress((rs)=>{
            const data = rs.data;
            console.log(data);
            if (!data.length) {
                Toast.offline('您还没有地址，去添加一个吧！', 1, ()=>{
                    this.linkTo('address/add');
                });
            } else {
                this.setState({
                    shipData: data,
                    isLoading: false
                });
            }
        });
    }

    linkTo(link) {
        this.context.router.history.push(link);
    }

    deleteAddress(id) {
        userApi.deleteShipAddress(id, (rs)=>{
            this.requestRealData();
        });
    }

    render(){
        const checkid = this.state.checkid;
        return <div>
            {this.state.shipData.map((item,index)=>{
                return <Card className="address_card" key={index}>
                    <div className="address_card_underline">
                        <div className="addr_name">{item.receiver_name}</div>
                        <div className="addr_phone">{item.receiver_phone}</div>
                        <div className="addr_detail">{item.province} {item.city} {item.detail}</div>
                    </div>
                    <div className="address_card_edit">
                        <input type="checkbox" id="check2" style={{marginRight:'0.8rem'}} 
                            checked={item.id==checkid} 
                            onChange={()=>{
                                this.setState({checkid: item.id});
                                localStorage.setItem("address",JSON.stringify(item));
                            }}
                        />
                        <label htmlFor="check2">默认地址</label>
                        <div className="addr_delete" onClick={()=>{this.deleteAddress(item.id)}}>删除</div>
                        <div className="addr_edit">编辑</div>
                    </div>
                </Card>
            })}

            <Submit onClick={()=>{this.linkTo('address/add')}}>添加新地址</Submit>
        </div>
    }
}
