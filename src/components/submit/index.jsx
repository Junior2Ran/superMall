import React from 'react';
import './index.less';

export default class Card extends React.Component {
    render() {
        const {children,blockStyle,buttonStyle,...others} = this.props;

        return <div className="submit_block" style={blockStyle}>
            <div className="submit_button" style={buttonStyle} {...others}>
                {children}
            </div>
        </div>
    }
}
