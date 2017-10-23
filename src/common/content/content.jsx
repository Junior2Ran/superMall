import React from 'react';
import "./content.less";

export default class Content extends React.Component {
    render(){
        return <div className="content">
            {this.props.children}
        </div>
    }
}
