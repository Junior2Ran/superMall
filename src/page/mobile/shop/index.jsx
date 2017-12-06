import React from 'react';
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
// import './index.less';

export default class Shop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        return <Layout header={true} footer={true}>
            <div style={{margin:'10rem auto',textAlign:'center'}}>
                content
            </div>
        </Layout>
    }
}

// export default LoadingHoc(Payment);
