import React from 'react';
import {WhiteSpace, WingBlank, Modal, List, Button} from 'antd-mobile';

export default class CartModal extends React.Component {

    render() {
        const title = <div className="popup-modal-header">as</div>;

        const footer = [{
            text: '加入购物车',
            onPress: ()=>{this.props.hideModal && this.props.hideModal()}
        }];

        return <Modal
            visible={this.props.modal}
            popup
            animationType="slide-up"
            closable
            onClose={()=>{this.props.hideModal && this.props.hideModal()}}
            title={title}
            footer={footer}
            className="popup-modal"
        >
            content
        </Modal>
    }
}