import React from 'react';
import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import {Carousel, WhiteSpace, WingBlank, Modal, List, Button, Toast} from 'antd-mobile';
import PutInCart from './putincart.jsx';
import CartModal from './cartmodal.jsx';
import Detail from "./detail.jsx";
import './index.less';
import product_data from "../../../static/data/product.js";   //mock假数据
import product_feature_data from "../../../static/data/product_feature.js";   //mock假数据

class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            isLoading: true,
            modal: false,
            data: {},
            featureData: [],
            selectorText: '未选择'
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
            const data = product_data.data;     //mock data
            const featureData = product_feature_data.data;   //mock假数据
            this.setState({
                data,
                featureData,
                isLoading: false
            });
            console.log(data)
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

    changeSelectorText(active) {
        let str = '';
        for (let i in active) {
            str = str + active[i].option_name + " ";
        }
        console.log(str)
        this.setState({
            selectorText: str
        });
    }

    render() {
    	const proData = this.state.data;
        const imgs = proData.img_urls.map((img_url, index)=>{
            return <img src={img_url} key={index} style={{margin:'0 auto'}} />
        });

        return <Layout header={true}>
            <div className="general_container">
                <Carousel className="my-carousel"
                    autoplay={true}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
                >
                    {imgs}
                </Carousel>
                <WingBlank size="lg">
                    <h3>{proData.name}<small>{proData.sub_title}</small></h3>
                    <p> 拯救者是联想在原有游戏PC——彪悍的Y系列笔记本之外,推出的全新子品牌。与联想另一个PC子品牌“小新”一样，拯救者定位于互联网产品。拯救者为发烧而生，流畅运行大型游戏，他的使命是为玩家带来爽快的体验。今天ZOL将要为大家介绍的是拯救者-14机型。</p>
                    <h2>￥{proData.price}</h2>
                </WingBlank>
                <WhiteSpace size="xs" />
            </div>
            <WhiteSpace size="lg"/>

            <div className="selector_container">
                <div className="selector_sec" onClick={this.showModal.bind(this)}>
                    <WingBlank>
                        <span>已选</span>
                        <span>{this.state.selectorText}</span>
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

            <Detail ImgsData={proData.intro_imgs}/>
            <WhiteSpace size="lg"/>

            <PutInCart style={{height:'3.125rem'}}
                showModal={this.showModal.bind(this)}
            />

            <CartModal 
                modalData={this.state.featureData}
                modal={this.state.modal} 
                hideModal={this.hideModal.bind(this)}
                selectorText={this.changeSelectorText.bind(this)}
            />
        </Layout>
    }
}

export default LoadingHoc(Product);
