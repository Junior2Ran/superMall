import React from 'react';
import {WhiteSpace, WingBlank, Modal, List, Button} from 'antd-mobile';

export default class PutInCart extends React.Component {

    render() {
        return <Modal
            popup
            visible={this.props.modal}
            maskClosable={false}
            animationType="slide-up"
        >
            <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                    <List.Item key={index}>{i}</List.Item>
                ))}
                <List.Item>
                    <Button type="primary" onClick={()=>{this.props.hideModal && this.props.hideModal()}}>买入</Button>
                </List.Item>
            </List>
        </Modal>
    }
}
