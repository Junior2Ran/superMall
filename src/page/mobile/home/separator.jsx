import React from 'react';
import {WhiteSpace} from 'antd-mobile';

export default class Separator extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.separatorData && nextProps.separatorData!==this.props.separatorData) {
        }
    }

    render(){
        let title = '';
        if (this.props.separatorData && this.props.separatorData.data) {
            title = this.props.separatorData.data.title;
        }
        return <div>
            <span>{title}</span>
            <WhiteSpace/>
        </div>
    }
}
