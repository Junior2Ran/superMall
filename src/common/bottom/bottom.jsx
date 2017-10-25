import React from 'react';
import "./bottom.less";

export default class Content extends React.Component {
    render(){
        return <div className="bottom-line">
            {this.props.children}
        </div>
    }
}
