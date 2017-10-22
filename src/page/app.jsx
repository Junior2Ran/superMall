import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive';
// import 'antd/dist/antd.css'; 
// import 'antd-mobile/dist/antd-mobile.css';
import Help from './pc/help.jsx';
import Home from './mobile/home/index.jsx';
import Catagory from "./mobile/catagory/index.jsx";
import Cart from "./mobile/cart/index.jsx";
import My from "./mobile/my/index.jsx";

export default class App extends React.Component {

    contextTypes() {
        router: React.PropTypes.Object
    }
    
    render(){
        return <div>
            <MediaQuery query='(min-device-width: 992px)'>
                <Help />
            </MediaQuery>
            <MediaQuery query='(max-device-width: 992px)'>
                <Router>
                    <Switch>
                        <Route exact component={Home} path='/'></Route>
                        <Route component={Catagory} path='/catagory'></Route>
                        <Route component={Cart} path='/cart'></Route>
                        <Route component={My} path='/my'></Route>
                    </Switch>
                </Router>
            </MediaQuery>
        </div>
    }
}
