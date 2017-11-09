import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "./header.less";

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    static contextTypes = {  
        router: React.PropTypes.object
    } 

    onCancel(value){
        this.setState({
            value: ''
        });
    }

    onChange(value){
        this.setState({
            value: value
        });
    }

    onSubmit(value){
        this.context.router.history.push('search');
    }

    render(){
        return <div className="header">
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onCancel={this.onCancel.bind(this)}
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        </div>
    }
}
