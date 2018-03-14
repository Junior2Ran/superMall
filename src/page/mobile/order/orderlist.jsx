import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Modal } from 'antd-mobile';
import LoadingHoc from "../../../common/loading-hoc.jsx";
import Card from "../../../components/card/index.jsx";
const alert = Modal.alert;
import orderApi from "../../../api/sxhorder.jsx";

class Orderlist extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: 1,
            status: '待付款',
            primaryButton: '确认付款',
            secondaryButton: '取消订单',
            link: '/payment',
            data: [],
            isLoading: true
        };
    }

    componentWillReceiveProps(nextProps) {
        this.requestData();
    }

    componentDidMount() {
        const tab = this.props.tab;
        switch(tab) {
            case 2:
                this.setState({
                    tab: tab,
                    status: '待确认收货',
                    primaryButton: '确认收货',
                    secondaryButton: '',
                    link: '/order'
                },this.requestData);
                break;
            case 3:
                this.setState({
                    tab: tab,
                    status: '待评价',
                    primaryButton: '去评价',
                    secondaryButton: '',
                    link: '/comment'
                },this.requestData);
                break;
            case 4:
                this.setState({
                    tab: tab,
                    status: '退换修',
                    primaryButton: '申请售后',
                    secondaryButton: '',
                    link: '/refund'
                },this.requestData);
                break;
            default:
                this.requestData();
                break;
        }
    }

    requestData() {
        console.log(1);
        orderApi.getOrdersByType(this.state.tab, (rs)=>{
            const data = rs.data;
            this.setState({
                data: data,
                isLoading: false
            });
        });
    }

    generateCard() {
        let vdom = [],
            tab = this.state.tab,
            data = this.state.data;

        for(let i in data) {
            if (tab == data[i].state) {
                vdom.push(<Card className="order_card" key={i}>
                    {/*<div className="order_card_group">
                        <span>阿呆的店铺</span>
                        <span className="order_card_status">{this.state.status}</span>
                    </div>*/}
                    {
                        data[i].products.map((item,index)=>{
                            return <Flex className="order_card_group" key={index}>
                                <div className="order_card_img">
                                    <img src={item.cover_img} />
                                </div>
                                <Flex.Item>
                                    <div>{item.name}</div>
                                </Flex.Item>
                                <div>
                                    <Flex justify="end">￥{item.price}</Flex>
                                    <Flex justify="end"><small>×{item.amount}</small></Flex>
                                </div>
                            </Flex>
                        })
                    }
                    <div className="order_card_group">
                        <Flex justify="end">共{data[i].product_count}件商品 合计：￥{data[i].cost}</Flex>
                    </div>
                    <div className="order_card_group">
                        <Flex className="order_button" justify="end">
                            { this.state.primaryButton === '确认收货' ? 
                            <a href="javascript:" onClick={()=>{this.showAlert(data[i].id, this.state.primaryButton)}}>{this.state.primaryButton}</a>
                            :
                            <Link to={{pathname:this.state.link, query:data[i].id}}>{this.state.primaryButton}</Link>
                            }
                            { this.state.secondaryButton ? 
                            <a href="javascript:" onClick={()=>{this.showAlert(data[i].id, this.state.secondaryButton)}} style={{marginLeft: 10}}>{this.state.secondaryButton}</a>
                            :
                            null
                            }
                        </Flex>
                    </div>
                </Card>);
            }
        }
        return vdom;
    }

    showAlert(id, msg) {
        const alertInstance = alert(`您确定要${msg}？`, '该操作无法撤消', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () => {
                switch(msg) {
                    case '确认收货':
                        this.confirmOrder(id);
                        break;
                    case '取消订单':
                        this.deleteOrder(id);
                        break;
                    default:
                        break;
                }
            } },
        ]);
    }

    confirmOrder(id) {
        orderApi.confirmOrder(id, (rs)=>{
            this.requestData();
        });
    }

    deleteOrder(id) {
        orderApi.deleteOrder(id, (rs)=>{
            this.requestData();
        });
    }

    render() {
        console.log(this.state)
        return <div>
            {this.generateCard()}
        </div>
    }
}

export default LoadingHoc(Orderlist);