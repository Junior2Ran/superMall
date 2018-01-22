import React from 'react';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import Infocard from "./infocard.jsx";
// import './index.less';

export default class Profitshare extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        
        };
    }

    componentDidMount() {
    }

    render() {
        return <Layout header={false} footer={false}>
            <Infocard />
        </Layout>
    }
}
