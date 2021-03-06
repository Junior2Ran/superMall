import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MediaQuery from 'react-responsive';
/**
 * 这里react-router还是V3的集中式路由写法，现在已经升级为V4，推荐今后将路由也用组件化的写法
 * 详情可以看下面这篇文章《关于 React Router 4 的一切》
 * http://blog.csdn.net/sinat_17775997/article/details/77411324
 */
import Help from './pc/help.jsx';
import Home from './mobile/home/index.jsx';
import Category from "./mobile/category/index.jsx";
import Cart from "./mobile/cart/index.jsx";
import My from "./mobile/my/index.jsx";
import Search from "./mobile/search/index.jsx";
import Product from "./mobile/product/index.jsx";
import Shop from "./mobile/shop/index.jsx";
import Order from "./mobile/order/index.jsx";
import Profitshare from "./mobile/profitshare/index.jsx";
import Payment from "./mobile/payment/index.jsx";
import PaymentResult from "./mobile/payment/result/index.jsx";
import Discount from "./mobile/discount/index.jsx";
import AddDiscount from "./mobile/discount/add/index.jsx"
import Address from "./mobile/address/index.jsx";
import AddAddress from "./mobile/address/add/index.jsx";
import Comment from "./mobile/comment/index.jsx";
import Refund from "./mobile/refund/index.jsx";

export default class App extends React.Component {
    
    render(){
        return <div>
            <MediaQuery query='(min-device-width: 992px)'>
                <Help />
            </MediaQuery>
            <MediaQuery query='(max-device-width: 992px)'>
                <Router>
                    <Switch>
                        <Route component={Home} path='/home'></Route>
                        <Route component={Category} path='/category'></Route>
                        <Route component={Cart} path='/cart'></Route>
                        <Route component={My} path='/my'></Route>

                        <Route component={Search} path='/search'></Route>
                        <Route component={Product} path='/product/:id'></Route>
                        <Route component={Shop} path='/shop/:id'></Route>
                        <Route component={Order} path='/order'></Route>
                        <Route component={Profitshare} path='/profitshare/:type'></Route>

                        <Route component={Payment} path='/payment' exact></Route>
                        <Route component={PaymentResult} path='/payment/result' exact></Route>

                        <Route component={Discount} path='/discount' exact></Route>
                        <Route component={AddDiscount} path='/discount/add' exact></Route>

                        <Route component={Address} path='/address' exact></Route>
                        <Route component={AddAddress} path='/address/add' exact></Route>

                        <Route component={Comment} path='/comment' exact></Route>
                        <Route component={Refund} path='/refund' exact></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </MediaQuery>
        </div>
    }
}
