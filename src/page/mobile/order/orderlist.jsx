import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Modal } from 'antd-mobile';
import Card from "../../../components/card/index.jsx";
const alert = Modal.alert;

export default class Orderlist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            status: '待付款',
            button: '去付款',
            link: '/payment'
        };
    }

    componentDidMount() {
        const tab = this.props.tab;
        switch(tab) {
            case 2:
                this.setState({
                    status: '待确认收货',
                    button: '确认收货',
                    link: '/order'
                });
                break;
            case 3:
                this.setState({
                    status: '待评价',
                    button: '去评价',
                    link: '/comment'
                })
                break;
            default:
                break;
        }
    }

    render() {
        return <Card className="order_card">
            <div className="order_card_group">
                <span>阿呆的店铺</span>
                <span className="order_card_status">{this.state.status}</span>
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
                    { this.state.button === '确认收货' ? 
                    <a href="javascript:" onClick={showAlert}>{this.state.button}</a>
                    :
                    <Link to={this.state.link}>{this.state.button}</Link>
                    }
                </Flex>
            </div>
        </Card>
    }
}

const showAlert = () => {
    const alertInstance = alert('您要确认收货吗？', '该操作无法撤消', [
        { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
        { text: '确认', onPress: () => console.log('ok') },
    ]);
};
