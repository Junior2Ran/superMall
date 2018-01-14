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

    componentDidMount() {
        this.requestMockData();
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
        }, 500);
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
