import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "./header.less";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
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

    render(){
        return <div className="header">
            <SearchBar
                value={this.state.value}
                placeholder="Search"
                onCancel={this.onCancel.bind(this)}
                onChange={this.onChange.bind(this)}
            />
        </div>
    }
}
