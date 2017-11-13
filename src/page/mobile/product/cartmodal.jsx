import React from 'react';
import {WhiteSpace, WingBlank, Modal, List, Button} from 'antd-mobile';

export default class CartModal extends React.Component {

    render() {
        return <Modal
            visible={this.props.modal}
            popup
            animationType="slide-up"
            closable
            onClose={()=>{console.log('test');}}
            platform="ios"
            title={<div>asd</div>}
            footer={["asd","123"]}
        >
            <Button type="primary" onClick={()=>{this.props.hideModal && this.props.hideModal()}}>买入</Button>
        </Modal>
    }
}
