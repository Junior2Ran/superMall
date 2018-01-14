import React from 'react';
import {Link} from 'react-router-dom';
import {WhiteSpace} from 'antd-mobile';

export default class Separator extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render(){
        let separator = this.props.separatorData && this.props.separatorData.data;
        if (!separator) {
            return null;
        }

        return <div className="separator_view">
            <Link to={separator.url}>{separator.title}</Link>
            <img src={separator.img_url} style={{width:'100%'}}/>
            <WhiteSpace/>
        </div>
    }
}
