import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import "./header.less";

export default class App extends React.Component {
    render(){
        return <div className="header">
            <span className="header-text">搜索</span>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                className="header-search"
            />
        </div>
    }
}
