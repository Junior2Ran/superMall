import React from 'react';
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import {Accordion, List} from 'antd-mobile';
import './index.less';
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
            // 左边主菜单目录，包含一级二级标题
            primaryMenu = this.state.data.map((data, index) => {
                const list = data.children.map((item, key) => {
                    // 三级list结构
                    const secondList = item.children.map((child, i) => {
                        return <div key={i} className="cate_item">
                            <Link to="product/1"><img src={child.img_url} className="cate_img" /></Link>
                            <p>{child.name}</p>
                        </div>
                    });
                    // 右边目录，包含二级三级分类
                    // 二级list结构（右边）
                    secondaryMenu.push(
                        <div id={data.name+item.name} key={`${index}${key}`}>
                            <p style={{color:'red'}}>{item.name}</p>
                            <div className="clearfix">
                                {secondList}
                            </div>
                        </div>
                    );
                    // 二级list结构（左边）
                    return <List.Item onClick={()=>{this.scrollToAnchor(data.name+item.name)}} key={key}>{item.name}</List.Item>
                });
                // 一级list结构
                return <Accordion.Panel header={data.name} key={index}>
                    <List className="my-list">
                        {list}
                    </List>
                </Accordion.Panel> 
            });
        }

        return <Layout header={true} footer={true}>
            <div className="fullHeightContainer">
                <div className="primaryMenu">
                    <Accordion accordion className="my-accordion" onChange={this.onChange}>
                        {primaryMenu}
                    </Accordion>
                </div>
                <div className="secondaryMenu">
                    {secondaryMenu}
                </div>
            </div>
        </Layout>
    }     
}
