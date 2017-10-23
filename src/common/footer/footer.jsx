import React from 'react';
import {TabBar, Icon} from 'antd-mobile';

export default class MyFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
    }

    static contextTypes = {  
        router: React.PropTypes.object
    }  

    getInitialState() {
        let link = this.getLink() || 'home';
        return {
            hidden: false,
            selectedTab: link,
        };
    }

    getLink(){
        let links = window.location.hash.match(/(\w+)/g);
        if (!links)
            return null;
        return links[0].toLowerCase();
    }

    linkTo(link) {
        this.context.router.history.push(link);
        this.setState({
          selectedTab: link,
        });
    }

    render(){
        return <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
            <TabBar.Item
                title="首页"
                key="首页"
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                selected={this.state.selectedTab === 'home'}
                badge={1}
                onPress={() => { this.linkTo('home'); }}
                data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="分类"
                key="分类"
                badge={'new'}
                selected={this.state.selectedTab === 'catagory'}
                onPress={() => { this.linkTo('catagory'); }}
                data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="购物车"
                key="购物车"
                dot
                selected={this.state.selectedTab === 'cart'}
                onPress={() => { this.linkTo('cart'); }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="我的"
                selected={this.state.selectedTab === 'my'}
                onPress={() => { this.linkTo('my'); }}
            >
            </TabBar.Item>
        </TabBar>
    }
}
