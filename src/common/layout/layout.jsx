import React from 'react';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import Content from '../content/content.jsx';

export default class MyLayout extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render(){
        const header = this.props.header ? <Header /> : null;
        
        return <div className="layout">
            {header}
            <Content {...this.props}>
                {this.props.children}
            </Content>
            <Footer footer={this.props.footer}/>
        </div>
    }
}
