import React from 'react';
import {Layout} from 'antd';
const { Content } = Layout;
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';

export default class App extends React.Component {
    
    render(){
        return <Layout>
            <Header />
            <Content>
                {this.props.children}
            </Content>
            <Footer />
        </Layout>
    }
}
