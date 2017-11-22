import React from 'react';
import { Toast, InputItem } from 'antd-mobile';
import Card from "../../../components/card/index.jsx";
import Submit from "../../../components/submit/index.jsx";
import ship_data from "../../../static/data/user_ship_address.js";   //mock假数据
import './index.less';

export default class Address extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shipData: [],
            isLoading: true
        };
    }

    static contextTypes = {  
        router: React.PropTypes.object
    }  

    componentDidMount() {
        this.requestData();
    }

    requestData() {
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

    linkTo(link) {
        this.context.router.history.push(link);
    }
    
    render(){
        return <div>
            <Card className="address_card">
                <div className="address_card_underline">
                    <div className="addr_name">何东燃</div>
                    <div className="addr_phone">13041017126</div>
                    <div className="addr_detail">湖北省荆州市海淀区黄庄医院</div>
                </div>
                <div className="address_card_edit">
                    <input type="checkbox" id="check1" style={{marginRight:'0.8rem'}} defaultChecked="true" />
                    <label htmlFor="check1">默认地址</label>
                    <div className="addr_delete">删除</div>
                    <div className="addr_edit">编辑</div>
                </div>
            </Card>
            <Card className="address_card">
                <div className="address_card_underline">
                    <div className="addr_name">何东燃</div>
                    <div className="addr_phone">13041017126</div>
                    <div className="addr_detail">湖北省荆州市海淀区黄庄医院</div>
                </div>
                <div className="address_card_edit">
                    <input type="checkbox" id="check2" style={{marginRight:'0.8rem'}}/>
                    <label htmlFor="check2">默认地址</label>
                    <div className="addr_delete">删除</div>
                    <div className="addr_edit">编辑</div>
                </div>
            </Card>

            <Submit onClick={()=>{this.linkTo('address/add')}}>添加新地址</Submit>
        </div>
    }
}
