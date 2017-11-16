import React from 'react';
import Layout from "../../../common/layout/layout.jsx";
import {Carousel, WhiteSpace, WingBlank, Modal, List, Button, Toast} from 'antd-mobile';
import PutInCart from './putincart.jsx';
import CartModal from './cartmodal.jsx';
import Detail from "./detail.jsx";
import './index.less';
import product_data from "../../../static/data/product_feature.js";   //mock假数据

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            modal: false,
            data: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
        this.requestData();
    }

    requestData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
            const data = product_data.data;   //mock假数据
            this.setState({
                data
            });
        }, 500);
    }

    showModal() {
        this.setState({modal: true});
    }

    hideModal(status) {
        this.setState({modal: false});
        if (status === 'success') {
            this.showToast();
        }
    }

    showToast() {
        Toast.success('加入成功，快去购物车看看你的宝贝吧～', 1, null, false);
    }

    render() {
    	
        return <Layout header={true}>
            <div className="general_container">
                <Carousel className="my-carousel"
                    autoplay={true}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
                >
                    <img src="./images/1.jpg" style={{width:'200px', height:'200px', margin:'0 auto'}} />
                    <img src="./images/2.jpg" style={{width:'200px', height:'200px', margin:'0 auto'}} />
                    <img src="./images/3.jpg" style={{width:'200px', height:'200px', margin:'0 auto'}} />
                </Carousel>
                <WingBlank size="lg">
                    <h3>联想超级战舰电脑<small>【大显卡，大怪兽】</small></h3>
                    <p> 拯救者是联想在原有游戏PC——彪悍的Y系列笔记本之外,推出的全新子品牌。与联想另一个PC子品牌“小新”一样，拯救者定位于互联网产品。拯救者为发烧而生，流畅运行大型游戏，他的使命是为玩家带来爽快的体验。今天ZOL将要为大家介绍的是拯救者-14机型。</p>
                    <h2>￥6999</h2>
                </WingBlank>
                <WhiteSpace size="xs" />
            </div>
            <WhiteSpace size="lg"/>

            <div className="selector_container">
                <div className="selector_sec" onClick={this.showModal.bind(this)}>
                    <WingBlank>
                        <span>已选</span>
                        <span>联想 拯救者R720 15.6寸 1年质保×1</span>
                        <span>></span>
                    </WingBlank>
                </div>
                <div className="selector_sec">
                    <WingBlank>
                        <span>送至</span>
                        <span>北京市 海淀区 有现货</span>
                        <span>></span>
                    </WingBlank>
                </div>
            </div>
            <WhiteSpace size="lg" />

            <Detail />
            <WhiteSpace size="lg"/>

            <PutInCart style={{height:'3.125rem'}}
                showModal={this.showModal.bind(this)}
            />

            <CartModal 
                modalData={this.state.data}
                modal={this.state.modal} 
                hideModal={this.hideModal.bind(this)}
            />
        </Layout>
    }
}
