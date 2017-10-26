import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../common/bottom/bottom.jsx";
import Carousel from "./carousel.jsx";
import Grid from "./grid1.jsx";
import Separator from "./separator.jsx";
import home_data from "../../../static/data/home.js";   //mock假数据
import './index.less';

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            carousel: {},
            grid: {},
            separator: {}
        };
    }

    componentDidMount() {
        this.requestData();
    }

    requestData() {
        // 通过API获取首页配置文件数据
        const data = home_data.data.rows;   //mock假数据
        let carousel = {},
            grid = {},
            separator = {};
        if (data.length) {
            for (let i in data) {
                if (data[i].style_id === 'carousel_view') {
                    carousel = data[i];
                } else if (data[i].style_id === 'grid_view') {
                    grid = data[i];
                } else if (data[i].style_id === 'separator_view') {
                    separator = data[i];
                }
            }
        }
        this.setState({
            carousel,
            grid,
            separator
        });
    }

    render(){
        return <Layout header={true}>
            <Carousel carouselData={this.state.carousel} />
            <Separator separatorData={this.state.separator} />
            <Grid gridData={this.state.grid} />
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}
