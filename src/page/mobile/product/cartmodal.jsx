import React from 'react';
import {WhiteSpace, WingBlank, Flex, Modal} from 'antd-mobile';

export default class CartModal extends React.Component {

    render() {
        const title = <div className="popup_modal_header">
            <Flex justify="end">
                <Flex.Item><img src="./images/1.jpg" /></Flex.Item>
                <Flex.Item>
                    <h3>￥6999</h3>
                    <p>联想 拯救者R987</p>
                </Flex.Item>
            </Flex>
        </div>;

        const footer = [{
            text: '加入购物车',
            onPress: ()=>{this.props.hideModal && this.props.hideModal('success')}
        }];

        const dataSet = this.props.modalData.map((data, index) => {
            const optionsData = data.options.map((option, key) => {
                return <div className="select_item" key={index+key} onClick={()=>{console.log(option.id)}}>{option.option_name}</div>
            });
            return <Flex wrap="wrap" className="content_sec" key={index}>
                <Flex.Item>
                    <header>{data.feature_name}</header>
                    {optionsData}
                </Flex.Item>
            </Flex>
        });

        return <Modal
            visible={this.props.modal}
            popup
            animationType="slide-up"
            closable
            onClose={()=>{this.props.hideModal && this.props.hideModal('close')}}
            title={title}
            footer={footer}
            className="popup_modal"
        >
            <div className="popup_modal_content">
                <WingBlank size="lg">
                    {dataSet}
                </WingBlank>
            </div>
        </Modal>
    }
}