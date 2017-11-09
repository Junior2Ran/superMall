import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../common/bottom/bottom.jsx";
import LoadingHoc from "../../../common/loading-hoc.jsx";
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';

import search_data from "../../../static/data/search_results.js";   //mock假数据

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	isLoading: true,
            tabIndex: 0,
            data: []
        };
    }

    componentDidMount() {
        this.requestData();
    }

    requestData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
        	const data = search_data.data;   //mock假数据
            this.setState({
                data,
                isLoading: false
            });
        }, 500);
    }

    onTabsChange(tab, index){
        this.setState({
            isLoading: true,
            tabIndex: index
        });
        // 模拟ajax异步获取数据
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 300);
    }

    render() {
        const content = this.state.data && this.state.data.map((item, index) => {
        	return <Link to={`/product/${item.id}`} key={index}>
        		<Flex style={{background:'#fff'}}>
	        		<Flex.Item>
	        			<img src={item.img_url} style={{width: '100%'}}/>
	        		</Flex.Item>
	        		<Flex.Item>
	        			<div style={{marginBottom: 10}}>{item.name}</div>
	        			<div style={{marginBottom: 10}}>￥{item.price}</div>
	        			<div>评论数：{item.comment_count}</div>
	        		</Flex.Item>
        		</Flex>
    			<WhiteSpace />
			</Link>
        });

        return <Layout header={true}>
            <Tabs tabs={tabs}
                onChange={this.onTabsChange.bind(this)} 
                initialPage={this.state.tabIndex}
                useOnPan={false}
            >
            </Tabs>
            <WhiteSpace size='xs' />
            {content}
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}

const tabs = [
    { title: '综合排序', sub: 'default' },
    { title: '按价格排序', sub: 'price' },
    { title: '按评论排序', sub: 'comments' },
];

export default LoadingHoc(Search);
