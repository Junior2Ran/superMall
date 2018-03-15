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
import locManager from "../../../common/salelink.jsx";
import wxApi from "../../../api/weixin.jsx";
import cartApi from "../../../api/sxhcart.jsx";
import productApi from "../../../api/sxhproduct.jsx";

const Item = List.Item;
const Brief = Item.Brief;
const host = 'http://ymymmall.swczyc.com/';

class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            isLoading: true,
            modal: false,
            data: {},
            featureData: [],
            comment: [],
            selectorText: '未选择'
        }
    }

    componentWillMount() {
        const url = encodeURIComponent(window.location.href.split('#')[0]);
        wxApi.postJsApiData(url, (rs) => {
            const data = rs.result;
            wx.config({  
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
                appId: data.appId, // 必填，公众号的唯一标识  
                timestamp: data.timestamp, // 必填，生成签名的时间戳  
                nonceStr: data.nonceStr, // 必填，生成签名的随机串  
                signature: data.signature, // 必填，签名，见附录1  
                jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"]
            });  
        });
    }

    componentDidMount() {
        this.requestRealData();
        
        const uid = locManager.getUId();
        const from_user = locManager.getFromUser();
        const myopenid = locManager.getMyOpenId();
        var shareData = {//自定义分享数据
            title: 'WF微商城',
            desc: '来自'+locManager.getMyNickname()+'的分享',
            link: host + locManager.generateSaleLink()
        };
        wx.ready(function(){
            wx.checkJsApi({
                jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage"],
                success: function(res) {
                    console.log(res)
                }
            });
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
        });
        wx.error(function(res){
            console.log('wx.error');
            console.log(res);
        });
    }

    requestMockData() {
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
        }, 100);
    }

    requestRealData() {
        const productId = this.props.match.params.id;
        productApi.getProduct(productId, (rs)=>{
            const data = rs.data;
            this.setState({
                data,
                featureData: data.features,
                isLoading: false
            });
        });
        productApi.getComment(productId, (rs)=>{
            const comment = rs.data;
            this.setState({
                comment
            });
        });
    }

    showModal() {
        this.setState({modal: true});
    }

    hideModal(status, id) {
        this.setState({modal: false});
        if (status === 'success') {
            cartApi.addProduct(id, (rs)=>{
                return;
            });
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
            {/*<NoticeBar mode="link" action=''>
                来自 {locManager.getFromUser()} 的分享。
            </NoticeBar>*/}
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
                    {/*<p> 拯救者是联想在原有游戏PC——彪悍的Y系列笔记本之外,推出的全新子品牌。与联想另一个PC子品牌“小新”一样，拯救者定位于互联网产品。拯救者为发烧而生，流畅运行大型游戏，他的使命是为玩家带来爽快的体验。今天ZOL将要为大家介绍的是拯救者-14机型。</p>*/}
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

            <Card className="shop_container">
                <WingBlank>
                    <Flex>
                        <img src={proData.shop.cover_img} className="shop_header_img" />
                        <Flex.Item>
                            <div className="shop_name">{proData.shop.shop_name}</div>
                            <div className="sub_title">{proData.shop.sub_title}</div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg"/>
                    {/*<Flex>
                        <Flex.Item>
                            <Link to={`/shop/${proData.shop.id}`} className="shop_link">查看分类</Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to={`/shop/${proData.shop.id}`} className="shop_link">进店逛逛</Link>
                        </Flex.Item>
                    </Flex>*/}
                </WingBlank>
            </Card>

            <Detail ImgsData={proData.intro_imgs}/>
            {/*<WhiteSpace size="lg"/>*/}

            <Card className="comment_container">
                <List renderHeader={() => '评论'}>
                    {this.state.comment ? this.state.comment.map((item,index)=>{
                        return <Item multipleLine wrap extra={<img src={item.buyer.avatar_url} />} key={index}>
                            {item.comment}<Brief>{item.buyer.buyer_name}<span style={{marginLeft:'2rem'}}>评价：好评</span></Brief>
                        </Item>
                    }) : null}
                </List>

            </Card>

            <PutInCart style={{height:'3.125rem'}}
                showModal={this.showModal.bind(this)}
            />

            <CartModal 
                productData={this.state.data}
                modalData={this.state.featureData}
                modal={this.state.modal} 
                hideModal={this.hideModal.bind(this)}
                selectorText={this.changeSelectorText.bind(this)}
            />
        </Layout>
    }
}

export default LoadingHoc(Product);
