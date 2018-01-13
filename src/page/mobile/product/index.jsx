import React from 'react';
import { Link } from 'react-router-dom';
import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import { Carousel, WhiteSpace, WingBlank, Modal, Toast, Flex, List, NoticeBar } from 'antd-mobile';
import PutInCart from './putincart.jsx';
import CartModal from './cartmodal.jsx';
import Detail from "./detail.jsx";
import './index.less';
import product_data from "../../../static/data/product.js";   //mock假数据
import product_feature_data from "../../../static/data/product_feature.js";   //mock假数据
import queryString from 'query-string';
import locManager from "../../../common/distribute-sale.jsx";

const Item = List.Item;
const Brief = Item.Brief;

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

    componentWillMount() {
        locManager.generateURL();
    }

    componentDidMount() {
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
        this.setState({
            selectorText: str
        });
    }

    render() {
    	const proData = this.state.data;
        const imgs = proData.img_urls.map((img_url, index)=>{
            return <img src={img_url} key={index} style={{margin:'0 auto'}} onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        });

        return <Layout header={true}>
            <NoticeBar mode="link" action={<span>我是{locManager.getMockId()}</span>}>
                来自 {locManager.getSaleLink()} 的分享。
            </NoticeBar>
            <Card className="general_container">
                <Carousel className="my-carousel"
                    autoplay={true}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
                >
                    {imgs}
                </Carousel>
                <WingBlank>
                    <h3>{proData.name}<small>{proData.sub_title}</small></h3>
                    <p> 拯救者是联想在原有游戏PC——彪悍的Y系列笔记本之外,推出的全新子品牌。与联想另一个PC子品牌“小新”一样，拯救者定位于互联网产品。拯救者为发烧而生，流畅运行大型游戏，他的使命是为玩家带来爽快的体验。今天ZOL将要为大家介绍的是拯救者-14机型。</p>
                    <h2>￥{proData.price}</h2>
                </WingBlank>
                <WhiteSpace size="xs" />
            </Card>

            <Card className="selector_container">
                <div className="selector_sec" onClick={this.showModal.bind(this)}>
                    <WingBlank>
                        <span>已选</span>
                        <span>{this.state.selectorText}</span>
                        <span>></span>
                    </WingBlank>
                </div>
                <div className="selector_sec">
                    <WingBlank>
                        <span>运费</span>
                        <span>￥{proData.ship_fee}</span>
                        <span></span>
                    </WingBlank>
                </div>
            </Card>

            {/*<Card className="shop_container">
                <WingBlank>
                    <Flex>
                        <img src={proData.shop.cover_img} className="shop_header_img" />
                        <Flex.Item>
                            <div className="shop_name">{proData.shop.shop_name}</div>
                            <div className="sub_title">{proData.shop.sub_title}</div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg"/>
                    <Flex>
                        <Flex.Item>
                            <Link to={`/shop/${proData.shop.id}`} className="shop_link">查看分类</Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to={`/shop/${proData.shop.id}`} className="shop_link">进店逛逛</Link>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </Card>*/}

            <Detail ImgsData={proData.intro_imgs}/>
            {/*<WhiteSpace size="lg"/>*/}

            <Card>
                <List renderHeader={() => '评论'}>
                    <Item multipleLine extra="好评">
                      商品品质不错！ <Brief>用户1 <span style={{marginLeft:'2rem'}}>2018-01-01</span></Brief>
                    </Item>
                    <Item multipleLine extra="中评">
                      一般，手机很卡。 <Brief>用户2 <span style={{marginLeft:'2rem'}}>2018-01-01</span></Brief>
                    </Item>
                </List>
            </Card>

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
