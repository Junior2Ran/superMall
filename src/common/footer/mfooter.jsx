import React from 'react';
import {TabBar, Icon} from 'antd-mobile';

import "./footer.less";

export default class MFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.context.router;
        console.log(this.context.router);
        this.state = {
            hidden: false,
            selectedTab: 'index'
        };
    }

    contextTypes: {
        router: React.PropTypes.object
    }

    linkTo(link) {
        console.log(this)
        this.context.router.push(link);
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
              selected={this.state.selectedTab === 'index'}
              badge={1}
              onPress={() => { this.linkTo('index'); }}
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
              onPress={() => {
                this.setState({
                  selectedTab: 'catagory',
                });
              }}
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
              onPress={() => {
                this.setState({
                  selectedTab: 'cart',
                });
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === 'my'}
              onPress={() => {
                this.setState({
                  selectedTab: 'my',
                });
              }}
            >
            </TabBar.Item>
          </TabBar>
    }
}
