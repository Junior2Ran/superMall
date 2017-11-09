import React from 'react';
import ReactDOM from "react-dom";
import Layout from "../../../common/layout/layout.jsx";
import {Flex} from 'antd-mobile';

import category_data from "../../../static/data/category.js";   //mock假数据

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
        };
    }

    componentDidMount() {
        this.requestData();
    }

    requestData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
            const data = category_data.data;   //mock假数据
            this.setState({
                data,
                isLoading: false
            });
        }, 500);
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    render() {
        let primaryMenu = [],
            secondaryMenu = [];
        if(this.state.data.length) {
            primaryMenu = this.state.data.map((data, index) => {
                const list = data.children.map((item, key) => {
                    return <dt id={`${data.name}`}>{item.name}</dt>
                });
                secondaryMenu.push(list);
                return <li key={Math.random()}>
                    <a onClick={()=>this.scrollToAnchor(data.name)}>{data.name}</a>
                </li> 
            });
        }
        return <Layout header={true} footer={true}>
            
        </Layout>
    }     
}
