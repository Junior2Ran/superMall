import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../common/bottom/bottom.jsx";
import LoadingHoc from "../../../common/loading-hoc.jsx";
import {WhiteSpace,Flex} from 'antd-mobile';

import search_data from "../../../static/data/search_results.js";   //mock假数据

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	isLoading: true,
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
        }, 1000);
    }

    render(){
        console.log(this.state.data);
        const content = this.state.data && this.state.data.map((item, index) => {
        	return <Link to={`/product/${item.id}`} key={index}>
        		<Flex>
	        		<Flex.Item>
	        			<img src={item.img_url} />
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
            {content}
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}
export default LoadingHoc(Search);
