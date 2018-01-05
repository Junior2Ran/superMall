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
            tab: 0
        };
    }

    componentDidMount() {
        const defaultTab = this.props.location.state;
        if (defaultTab) {
            this.setState({
                tab: defaultTab.sub
            });
        }
    }

    onChangeTab(tab, index) {
        this.setState({
            tab: index
        });
    }

    render() {
        return <Layout header={false} footer={false}>
            <div className="order_container">
                <Tabs tabs={tabs}
                  page={this.state.tab}
                  onChange={this.onChangeTab.bind(this)}
                >
                    <div style={{textAlign:'center'}}>
                        暂无订单1
                    </div>
                    <div style={{textAlign:'center'}}>
                        暂无订单2
                    </div>
                    <div style={{textAlign:'center'}}>
                        暂无订单3
                    </div>
                    <div style={{textAlign:'center'}}>
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
