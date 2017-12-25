import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';
import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import Carousel from "./carousel.jsx";
import Grid from "./grid1.jsx";
import Separator from "./separator.jsx";
import home_data from "../../../static/data/home";   //mock假数据
import homeApi from "../../../api/home.jsx";
import './index.less';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            carousel: {},
            grid: {},
            separator: {},
            isLoading: true
        };
    }

    componentDidMount() {
        this.requestMockData();
    }

    requestMockData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
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
                separator,
                isLoading: false
            });
        }, 500);
    }

    requestRealData() {
        homeApi.getHomepage((rs) => {
            const data = rs.data.rows;   //api真数据
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
            console.log(grid);
            this.setState({
                carousel,
                grid,
                separator,
                isLoading: false
            });
        });
    }

    render() {
        return <Layout header={true} footer={true}>
            <Carousel carouselData={this.state.carousel} />
            <Separator separatorData={this.state.separator} />
            <Grid gridData={this.state.grid} />
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}

export default LoadingHoc(Home);
