import React from 'react';
import { Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class PutInCart extends React.Component {
    
    renderButton() {
        return <div className="putincart">
            <Link to="/home" className="secondary_btn" style={{width:'25%'}}>
                <div className="iconH icon_home"></div>
            </Link>
            <Link to="/cart" className="secondary_btn" style={{width:'25%'}}>
                <div className="iconH icon_cart"></div>
            </Link>
            <a onClick={()=>{this.props.showModal && this.props.showModal()}} className="primary_btn" style={{width:'50%'}}>加入购物车</a>
        </div>
    }

    render() {
        const button = this.renderButton();
        
        return <div style={{...this.props.style}}>
            {button}
        </div>
    }
}
