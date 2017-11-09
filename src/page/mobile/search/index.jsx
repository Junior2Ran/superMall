import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../common/bottom/bottom.jsx";
import LoadingHoc from "../../../common/loading-hoc.jsx";
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

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

    onTabsChange(tab, index){
        this.setState({
            isLoading: true
        });
        console.log(tab,index)
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
        const content = this.state.data && this.state.data.map((item, index) => {
        	return <Link to={`/product/${item.id}`} key={index}>
        		<Flex>
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
            <StickyContainer>
                <Tabs tabs={tabs}
                    renderTabBar={renderTabBar}
                    onChange={this.onTabsChange.bind(this)}
                >
                </Tabs>
            </StickyContainer>
            <WhiteSpace size='xs' />
            <Bottom>我是有底线的</Bottom>
        </Layout>
    }
}

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}

const tabs = [
    { title: '综合排序', sub: 'default' },
    { title: '按价格排序', sub: 'price' },
    { title: '按评论排序', sub: 'comments' },
];

export default LoadingHoc(Search);
