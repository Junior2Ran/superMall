import React from 'react';
import {render} from 'react-dom';
import {Layout, Menu} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){
        return <Layout className="layout">
            <Footer>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Footer>
        </Layout>
    }
}
