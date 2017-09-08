import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import Help from './help.jsx';
import Layout from '../common/layout/layout.jsx';


export default class App extends React.Component {
    render(){
        return <div>
            <MediaQuery query='(min-device-width: 992px)'>
                <Help />
            </MediaQuery>
            <MediaQuery query='(max-device-width: 992px)'>
                <Layout>
                    asdadslhjfkaldsjkgfhasjkdfgb
                </Layout>
            </MediaQuery>
        </div>
    }
}
