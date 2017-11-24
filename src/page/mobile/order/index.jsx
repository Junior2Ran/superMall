import React from 'react';
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
// import './index.less';

export default class Order extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: ''
        };
    }

    componentDidMount() {
        console.log(this.props.location.state)
    }

    render() {
        return <Layout header={false} footer={false}>
            <Tabs tabs={tabs}
              initialPage={1}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
              <div>
                Content of first tab
              </div>
              <div>
                Content of second tab
              </div>
              <div>
                Content of third tab
              </div>
            </Tabs>
        </Layout>
    }
}

const tabs = [
    { title: '待付款', sub: '1' },
    { title: '待收货', sub: '2' },
    { title: '退换修', sub: '3' },
];

// export default LoadingHoc(Payment);
