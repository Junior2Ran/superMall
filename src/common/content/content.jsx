import React from 'react';
import "./content.less";

export default class Content extends React.Component {
    render(){
        const tabHeight = '3.125rem';
        const searchHeight = '2.75rem';
        
        return <div className="content" style={{
            marginBottom: this.props.footer ? tabHeight : '0',
            top: this.props.header ? searchHeight : '0'
        }}>
            {this.props.children}
        </div>
    }
}
