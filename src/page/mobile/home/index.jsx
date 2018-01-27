import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';
import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import Carousel from "./carousel.jsx";
import Grid from "./grid.jsx";
import Separator from "./separator.jsx";
import home_data from "../../../static/data/home";   //mock假数据
import homeApi from "../../../api/home.jsx";
import './index.less';
import queryString from 'query-string';
import locManager from "../../../common/salelink.jsx";
import wxApi from "../../../api/weixin.jsx";

const host = 'http://ymymmall.swczyc.com/';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            carouselDataSet: [],
            gridDataSet: [],
            separatorDataSet: [],
            isLoading: true
        };
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
        this.requestMockData();

        const uid = locManager.getUId();
        const from_user = locManager.getFromUser();
        const myopenid = locManager.getMyOpenId();
        const mynickname = locManager.getMyNickname();
        var shareData = {   // 自定义分享数据
            title: 'WF微商城',
            desc: '来自'+locManager.getMyNickname()+'的分享',
            link: host + locManager.generateSaleLink()
        };
        if (uid) {          // 第一次扫码，url带uid字段，不带from_user
            homeApi.postOpenId(uid, mynickname, myopenid, (rs)=>{
                alert(rs);
            });
        } else {            // 分享后的链接，url不带uid字段，带from_user
            homeApi.createAccount(mynickname, myopenid, (rs)=>{
                alert(rs);
            });
        }
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
            const data = home_data.data.rows;   //mock假数据
            let carouselDataSet = [],
                gridDataSet = [],
                separatorDataSet = [];
            if (data.length) {
                for (let i in data) {
                    if (data[i].style_id === 'carousel_view') {
                        carouselDataSet.push(data[i]);
                    } else if (data[i].style_id === 'grid_view') {
                        gridDataSet.push(data[i])
                    } else if (data[i].style_id === 'separator_view') {
                        separatorDataSet.push(data[i])
                    }
                }
            }
            this.setState({
                carouselDataSet,
                gridDataSet,
                separatorDataSet,
                isLoading: false
            });
        }, 100);
    }

    requestRealData() {
        homeApi.getHomepage((rs) => {
            const data = rs.data.rows;   //api真数据
            let carouselDataSet = [],
                gridDataSet = [],
                separatorDataSet = [];
            if (data.length) {
                for (let i in data) {
                    if (data[i].style_id === 'carousel_view') {
                        carouselDataSet.push(data[i]);
                    } else if (data[i].style_id === 'grid_view') {
                        gridDataSet.push(data[i])
                    } else if (data[i].style_id === 'separator_view') {
                        separatorDataSet.push(data[i])
                    }
                }
            }
            this.setState({
                carouselDataSet,
                gridDataSet,
                separatorDataSet,
                isLoading: false
            });
        });
    }

    render() {
        return <Layout header={true} footer={true}>
            <Carousel carouselData={this.state.carouselDataSet[0]} />
            <Grid gridData={this.state.gridDataSet[0]} />
            <Separator separatorData={this.state.separatorDataSet[0]} />
            <Grid gridData={this.state.gridDataSet[1]} />
            <Separator separatorData={this.state.separatorDataSet[1]} />
            <Grid gridData={this.state.gridDataSet[2]} />
            <Separator separatorData={this.state.separatorDataSet[2]} />
            <Grid gridData={this.state.gridDataSet[3]} />
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}

export default LoadingHoc(Home);
