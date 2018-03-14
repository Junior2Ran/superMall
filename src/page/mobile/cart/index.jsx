import React from 'react';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import { Link } from 'react-router-dom';
import { Flex, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less';
import cartApi from "../../../api/sxhcart.jsx";
import orderApi from "../../../api/sxhorder.jsx";

class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            select: []
        };
    }

    static contextTypes = {  
        router: React.PropTypes.object
    }  

    componentDidMount() {
        this.requestData();
    }

    getTotalPrice() {
        let total = 0;
        let cart = [];
        this.state.data.map((data,index)=>{
            data.cart_items.map((val,index)=>{
                cart.push(val);
            });
        });
        const select = this.state.select;
        for(var i in cart){
            if(select[cart[i].id] == true){
                total += cart[i].amount*cart[i].product.price;
            }
        }
        return total;
    }

    requestData() {
        cartApi.getCart((rs) => {
            const data = rs.data;
            this.setState({
                data: data
            });
        });
    }

    modifyCart(cartitemid, val) {
        cartApi.modifyProduct(cartitemid, val, (rs) => {
            this.requestData();
        });
    }

    deleteCart(cartitemid) {
        cartApi.deleteProduct(cartitemid, (rs) => {
            this.requestData();
        });
    }

    toggleCheckbox(cartitemid) {
        let select = this.state.select;
        select[cartitemid] = !select[cartitemid];
        this.setState({
            select: select
        });
    }

    createOrder() {
        let products = [],
            amounts = [],
            cart = [];
        this.state.data.map((data,index)=>{
            data.cart_items.map((val,index)=>{
                cart.push(val);
            });
        });
        const select = this.state.select;
        for(var i in cart){
            if(select[cart[i].id] == true){
                amounts.push(cart[i].amount);
                products.push(cart[i].product.id);
            }
        }
        if (amounts.length) {
            orderApi.createOrder(products, amounts, (rs) => {
                let path = {
                    pathname: '/payment',
                    query: rs.data.id
                }
                this.context.router.history.push(path);
            });
        }
    }

    generateCard() {
        const data = this.state.data;
        let vdom = [];
        for (var i in data) {
            vdom.push(<Card className="cart_card" key={i}>
                <div className="cart_card_underline">
                    <span className="cart_card_shopname">{data[i].shop.shop_name}</span>
                </div>
                {data[i].cart_items.map((item, index) => {
                    return <Flex className="cart_card_container" key={index}>
                        <input type="checkbox" checked={this.state.select[item.id]||false} onChange={(e)=>{this.toggleCheckbox(item.id)}} />
                        <div className="cart_card_img">
                            <img src={item.product.cover_img} />
                        </div>
                        <Flex.Item>
                            <div className="title_text">{item.product.name}</div>
                            <div className="price_text">￥{item.product.price}</div>
                        </Flex.Item>
                        <div className="input_num">
                            <InputItem
                                type="number"
                                value={item.amount}
                                onChange={(val)=>{this.modifyCart(item.id, val)}}
                            />
                        </div>
                        <div className="input_delete" onClick={()=>{this.deleteCart(item.id)}}>
                            删除
                        </div>
                    </Flex>
                })}
            </Card>);
        }
        return vdom;
    }

    render() {
        const { getFieldProps } = this.props.form;
        return <Layout footer={true}>
            {this.generateCard()}
            <Bottom>我是有底线的</Bottom>

            <div style={{height:'3.5rem'}}></div>
            <div className="putincart cart_summary">
                <div className="secondary_btn" style={{width:'60%',fontSize:'0.8rem'}}>
                    合计：￥{this.getTotalPrice()}
                </div>
                <div className="primary_btn" style={{width:'40%'}} onClick={this.createOrder.bind(this)}>结算</div>
            </div>
        </Layout>
    }
}

const BasicInputExampleWrapper = createForm()(Cart);
export default BasicInputExampleWrapper;
// export default LoadingHoc(Cart);
