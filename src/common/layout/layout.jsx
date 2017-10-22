import React from 'react';
import {Layout} from 'antd';
const { Content } = Layout;
import Footer from '../footer/mfooter.jsx';
import Header from '../header/header.jsx';

export default class MyLayout extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render(){
        const header = this.props.header ? <Header /> : null;
        
        return <Layout style={{marginBottom:'56px'}}>
            {header}
            <Content>
                {this.props.children}
            </Content>
            <Footer />
        </Layout>
    }
}
