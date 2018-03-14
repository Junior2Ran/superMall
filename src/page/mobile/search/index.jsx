import React from 'react';
import {Link} from 'react-router-dom';
import Layout from "../../../common/layout/layout.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import LoadingHoc from "../../../common/loading-hoc.jsx";
import {WhiteSpace,Flex,Tabs} from 'antd-mobile';
import './index.less';
import search_data from "../../../static/data/search_result";   //mock假数据
import searchApi from "../../../api/sxhsearch.jsx";

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
        this.requestRealData();
    }

    requestMockData() {
        // 通过API获取首页配置文件数据
        // 模拟ajax异步获取数据
        setTimeout(() => {
        	const data = search_data.data;   //mock假数据
            this.setState({
                data,
                isLoading: false
            });
        }, 100);
    }

    requestRealData() {
        searchApi.getSearchResults((rs) => {
            const data = rs.data;   //api真数据
            this.setState({
                data,
                isLoading: false
            });
        });
    }

    onTabsChange(tab, index) {
        this.setState({
            isLoading: true,
            tabIndex: index
        });
        // 模拟ajax异步获取数据
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 100);
    }

    render() {
        const content = this.state.data && this.state.data.map((item, index) => {
        	return <Link to={`/product/${item.id}`} key={index} className="search_item">
        		<Flex style={{background:'#fff'}}>
	        		<Flex.Item style={{flex:'0 0 35%'}}>
	        			<img src={item.img_url} style={{width: '100%'}}/>
	        		</Flex.Item>
	        		<Flex.Item>
	        			<div style={{marginBottom: 5}}>{item.name}</div>
	        			<div style={{marginBottom: 5}}>￥{item.price}</div>
	        			<div>评论数：{item.comment_count}</div>
	        		</Flex.Item>
        		</Flex>
    			<WhiteSpace />
			</Link>
        });

        return <Layout header={true}>
            <div className="search_container">
                <Tabs tabs={tabs}
                    onChange={this.onTabsChange.bind(this)} 
                    initialPage={this.state.tabIndex}
                    useOnPan={false}
                    className="search_tabs"
                >
                </Tabs>
                <WhiteSpace size='xs' />
                {content}
                <Bottom>我是有底线的</Bottom>
            </div>
        </Layout>
    }
}

const tabs = [
    { title: '综合排序', sub: 'default' },
    { title: '按价格排序', sub: 'price' },
    { title: '按评论排序', sub: 'comments' },
];

export default LoadingHoc(Search);
