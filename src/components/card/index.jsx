import React from 'react';
import './index.less';

export default class Card extends React.Component {
    render() {
        const {children,...others} = this.props;

        return <div className="card_section" {...others}>
            {children}
        </div>
    }
}
