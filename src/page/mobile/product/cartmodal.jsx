import React from 'react';
import {WhiteSpace, WingBlank, Flex, Modal} from 'antd-mobile';

export default class CartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        const data = this.props.modalData;
        let active = {};
        for (let i in data) {
            Object.assign(active, {[data[i].feature_name]: data[i].options[0]});
        }
        return {
            active
        };
    }

    clickSelector(featureName, option) {
        this.setState({
            active: Object.assign(this.state.active, {[featureName]: option})
        });
    }

    generateDataSet() {
        return this.props.modalData.map((data, index) => {
            const optionsData = data.options.map((option, key) => {
                let className = "select_item";
                if (this.state.active[data.feature_name].id === option.id) {
                    className+=" select_active";
                }
                return <div className={className} 
                    key={index+key} 
                    onClick={() => {this.clickSelector(data.feature_name, option)}}
                >
                    {option.option_name}
                </div>
            });
            return <Flex wrap="wrap" className="content_sec" key={index}>
                <Flex.Item>
                    <header>{data.feature_name}</header>
                    {optionsData}
                </Flex.Item>
            </Flex>
        });
    }

    render() {
        const title = <div className="popup_modal_header">
            <Flex justify="end">
                <Flex.Item><img src={this.props.productData.img_urls[0]} style={{width:'50%'}}/></Flex.Item>
                <Flex.Item>
                    <h3>￥{this.props.productData.price}</h3>
                    <p>{this.props.productData.name}</p>
                </Flex.Item>
            </Flex>
        </div>;

        const footer = [{
            text: '加入购物车',
            onPress: ()=>{
                this.props.hideModal && this.props.hideModal('success',this.props.productData.id);
                this.props.selectorText && this.props.selectorText(this.state.active);
            }
        }];

        const dataSet = this.generateDataSet();

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
