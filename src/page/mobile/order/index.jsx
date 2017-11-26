import React from 'react';
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';
import { Link } from 'react-router-dom';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import './index.less';

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
            <div className="order_container">
                <Tabs tabs={tabs}
                  initialPage={1}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                >
                    <div>
                        暂无订单1
                    </div>
                    <div>
                        暂无订单2
                    </div>
                    <div>
                        暂无订单3
                    </div>
                    <div>
                        暂无订单4
                    </div>
                </Tabs>
            </div>
        </Layout>
    }
}

const tabs = [
    { title: '全部', sub: '0' },
    { title: '待付款', sub: '1' },
    { title: '待收货', sub: '2' },
    { title: '退换修', sub: '3' },
];

// export default LoadingHoc(Payment);
