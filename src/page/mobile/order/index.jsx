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
                    <div>
                        <Card className="order_card">
                            <div className="order_card_group">
                                <span>阿呆的店铺</span>
                                <span className="order_card_status">待付款</span>
                            </div>
                            <Flex className="order_card_group">
                                <div className="order_card_img">
                                    <img src="./images/4.png" />
                                </div>
                                <Flex.Item>
                                    <div className="bold_text">IPhone X 16G 2009限量版</div>
                                    <div>红色 / 16G</div>
                                </Flex.Item>
                                <div>
                                    <Flex className="bold_text" justify="end">￥5000</Flex>
                                    <Flex justify="end"><small>×1</small></Flex>
                                </div>
                            </Flex>
                            <Flex className="order_card_group">
                                <div className="order_card_img">
                                    <img src="./images/4.png" />
                                </div>
                                <Flex.Item>
                                    <div className="bold_text">IPhone X 16G 2009限量版</div>
                                    <div>红色 / 16G</div>
                                </Flex.Item>
                                <div>
                                    <Flex className="bold_text" justify="end">￥5000</Flex>
                                    <Flex justify="end"><small>×1</small></Flex>
                                </div>
                            </Flex>
                            <div className="order_card_group">
                                <Flex justify="end">共2件商品 合计：￥10000.00</Flex>
                            </div>
                            <div className="order_card_group">
                                <Flex className="order_button" justify="end">
                                    <Link to="payment">去付款</Link>
                                </Flex>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card className="order_card">
                            <div className="order_card_group">
                                <span>阿呆的店铺</span>
                                <span className="order_card_status">待付款</span>
                            </div>
                            <Flex className="order_card_group">
                                <div className="order_card_img">
                                    <img src="./images/4.png" />
                                </div>
                                <Flex.Item>
                                    <div className="bold_text">IPhone X 16G 2009限量版</div>
                                    <div>红色 / 16G</div>
                                </Flex.Item>
                                <div>
                                    <Flex className="bold_text" justify="end">￥5000</Flex>
                                    <Flex justify="end"><small>×1</small></Flex>
                                </div>
                            </Flex>
                            <Flex className="order_card_group">
                                <div className="order_card_img">
                                    <img src="./images/4.png" />
                                </div>
                                <Flex.Item>
                                    <div className="bold_text">IPhone X 16G 2009限量版</div>
                                    <div>红色 / 16G</div>
                                </Flex.Item>
                                <div>
                                    <Flex className="bold_text" justify="end">￥5000</Flex>
                                    <Flex justify="end"><small>×1</small></Flex>
                                </div>
                            </Flex>
                            <div className="order_card_group">
                                <Flex justify="end">共2件商品 合计：￥10000.00</Flex>
                            </div>
                            <div className="order_card_group">
                                <Flex className="order_button" justify="end">
                                    <Link to="payment">去付款</Link>
                                </Flex>
                            </div>
                        </Card>
                    </div>
                    <div className="empty">
                        暂无订单
                    </div>
                    <div className="empty">
                        暂无订单
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
