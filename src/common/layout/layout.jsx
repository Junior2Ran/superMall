import React from 'react';
import {render} from 'react-dom';
import {Layout} from 'antd';
const { Content } = Layout;
import Footer from '../footer/footer.jsx';

export default class App extends React.Component {
    
    render(){
        return <Layout>
            <Content>
                {this.props.children}
            </Content>
            <Footer />
        </Layout>
    }
}
