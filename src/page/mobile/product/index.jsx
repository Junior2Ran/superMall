import React from 'react';
import Layout from "../../../common/layout/layout.jsx";
import {Carousel, WhiteSpace, WingBlank, Modal, List, Button, Toast} from 'antd-mobile';
import PutInCart from './putincart.jsx';
import CartModal from './cartmodal.jsx';
import './index.less';

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    showModal() {
        this.setState({modal: true});
    }

    hideModal() {
        this.setState({modal: false});
        this.showToast();
    }

    showToast() {
        Toast.success('This is a toast tips !!!', 1, null, false);
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
                    <img src="./images/1.jpg" style={{width:'100%'}} />
                    <img src="./images/2.jpg" style={{width:'100%'}} />
                    <img src="./images/3.jpg" style={{width:'100%'}} />
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
                <div className="selector_sec">
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

            <div className="detail_container">
                <WhiteSpace size="lg"/>
                <WingBlank size="lg">商品详情</WingBlank>
                <WhiteSpace />
                <img src="./images/1.jpg" style={{width:'100%'}} />
                <img src="./images/2.jpg" style={{width:'100%'}} />
                <img src="./images/3.jpg" style={{width:'100%'}} />
            </div>
            <WhiteSpace size="lg"/>

            <PutInCart style={{height:'3.125rem'}}
                showModal={this.showModal.bind(this)}
            />

            <CartModal modal={this.state.modal} hideModal={this.hideModal.bind(this)}/>
        </Layout>
    }
}
