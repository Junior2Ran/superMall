import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
import Help from './help.jsx';
import Layout from '../common/layout/layout.jsx';

import 'antd/dist/antd.css';

export default class App extends React.Component {
    render(){
        return <div>
            <MediaQuery query='(min-device-width: 1224px)'>
                <Help />
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <Layout></Layout>
            </MediaQuery>
        </div>
    }
}
