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
import Payment from "./mobile/payment/index.jsx";
import Order from "./mobile/order/index.jsx";
import Address from "./mobile/address/index.jsx";
import AddAddress from "./mobile/address/add/index.jsx";

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
                        <Route component={Payment} path='/payment'></Route>
                        <Route component={Order} path='/order'></Route>

                        <Route component={Address} path='/address' exact></Route>
                        <Route component={AddAddress} path='/address/add' exact></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </MediaQuery>
        </div>
    }
}
