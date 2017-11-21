import React from 'react';
import './index.less';

export default class Card extends React.Component {
    render() {
        const {children,className,...others} = this.props;

        return <div className={`card_section ${className}`} {...others}>
            {children}
        </div>
    }
}
