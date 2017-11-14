import React from 'react';
import "./content.less";

export default class Content extends React.Component {
    render(){
        const className = `content${this.props.header?'':' noHeader'}${this.props.footer?'':' noFooter'}`;
        
        return <div className={className}>
            {this.props.children}
        </div>
    }
}
