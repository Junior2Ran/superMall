import React from 'react';
import {WhiteSpace} from 'antd-mobile';

export default class Home extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
    }

    render(){

        return <div>
            热门商品
            <WhiteSpace/>
        </div>
    }
}
