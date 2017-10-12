import React from 'react';
import {Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import "./footer.less";

export default class App extends React.Component {
    render(){
        return <Layout className="layout">
            <Content>
                {this.props.children}
            </Content>
            <Footer className="footer">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key="1"><Icon type="home" /><p className="menutitle">首页</p></Menu.Item>
                <Menu.Item key="2"><Icon type="shop" /><p className="menutitle">商品列表</p></Menu.Item>
                <Menu.Item key="3"><Icon type="shopping-cart" /><p className="menutitle">购物车</p></Menu.Item>
                <Menu.Item key="4"><Icon type="user" /><p className="menutitle">我的</p></Menu.Item>
              </Menu>
            </Footer>
        </Layout>
    }
}
