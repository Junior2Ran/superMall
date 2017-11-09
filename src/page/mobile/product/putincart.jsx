import React from 'react';

export default class PutInCart extends React.Component {
    
    renderButton() {
        if (this.props.isPutting) {
            return <a className="primary-btn" style={{width:'100%'}}>加入购物车</a>
        } else {
            return <div className="putincart">
                <a className="secondary-btn" style={{width:'25%'}}>主页</a>
                <a className="secondary-btn" style={{width:'25%'}}>购物车</a>
                <a className="primary-btn" style={{width:'50%'}}>加入购物车</a>
            </div>
        }
    }

    render() {
        const button = this.renderButton();
        return <div style={{...this.props.style}}>
            {button}
        </div>
    }
}
