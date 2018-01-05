import React from 'react';
import {TabBar} from 'antd-mobile';
import './footer.less';

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
            selectedTab: link
        };
    }

    getLink(){
        let links = window.location.hash.match(/(\w+)/g);
        if (!links)
            return null;
        return links[0].toLowerCase();
    }

    linkTo(link) {
        if (link !== this.state.selectedTab) {
            this.context.router.history.push(`/${link}`);
            this.setState({
              selectedTab: link
            });
        }
    }

    render(){
        return <div className="footer">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#f28b12"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/home.png) center center /  24px 24px no-repeat' }}
                    />}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/home-fill.png) center center /  24px 24px no-repeat' }}
                    />}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => { this.linkTo('home'); }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/catagory.png) center center /  24px 24px no-repeat' }}
                    />}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/catagory-fill.png) center center /  24px 24px no-repeat' }}
                    />}
                    title="分类"
                    key="分类"
                    selected={this.state.selectedTab === 'category'}
                    onPress={() => { this.linkTo('category'); }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/cart.png) center center /  24px 24px no-repeat' }}
                    />}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/cart-fill.png) center center /  24px 24px no-repeat' }}
                    />}
                    title="购物车"
                    key="购物车"
                    selected={this.state.selectedTab === 'cart'}
                    onPress={() => { this.linkTo('cart'); }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/user.png) center center /  24px 24px no-repeat' }}
                    />}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(./images/icons/user-fill.png) center center /  24px 24px no-repeat' }}
                    />}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'my'}
                    onPress={() => { this.linkTo('my'); }}
                >
                </TabBar.Item>
            </TabBar>
        </div>
    }
}
