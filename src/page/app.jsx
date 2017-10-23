import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MediaQuery from 'react-responsive';
// import 'antd/dist/antd.css'; 
import Help from './pc/help.jsx';
import Home from './mobile/home/index.jsx';
import Category from "./mobile/category/index.jsx";
import Cart from "./mobile/cart/index.jsx";
import My from "./mobile/my/index.jsx";

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
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </MediaQuery>
        </div>
    }
}
