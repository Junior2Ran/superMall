import React from 'react';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import { Flex, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox0: true,
            checkbox1: false,
            checkbox2: true,
            numValue0: 1,
            numValue1: 1,
            numValue2: 1,
        };
    }

    render() {
        const { getFieldProps } = this.props.form;
        return <Layout footer={true}>
            <Card className="cart_card">
                <div className="cart_card_underline">
                    <input type="checkbox" checked={this.state.checkbox0 && this.state.checkbox1} onChange={()=>{this.setState({
                            checkbox0: !(this.state.checkbox0 && this.state.checkbox1),
                            checkbox1: !(this.state.checkbox0 && this.state.checkbox1)
                    })}}/>
                    <span className="cart_card_shopname">阿呆的店铺</span>
                </div>
                <Flex className="cart_card_container cart_card_underline">
                    <input type="checkbox" checked={this.state.checkbox0} onChange={()=>{this.setState({
                        checkbox0: !this.state.checkbox0
                    })}} />
                    <div className="cart_card_img">
                        <img src="./images/4.png" />
                    </div>
                    <Flex.Item>
                        <div className="title_text">IPhone X 16G 2009限量版</div>
                        <div>红色 / 16G</div>
                        <div className="price_text">￥5000</div>
                    </Flex.Item>
                    <div className="input_num">
                        <InputItem
                            type="number"
                            value={this.state.numValue0}
                            onChange={(val)=>{this.setState({
                                numValue0: val
                            })}}
                        />
                    </div>
                    <div className="input_delete">
                        删除
                    </div>
                </Flex>
                <Flex className="cart_card_container">
                    <input type="checkbox" checked={this.state.checkbox1} onChange={()=>{this.setState({
                        checkbox1: !this.state.checkbox1
                    })}} />
                    <div className="cart_card_img">
                        <img src="./images/4.png" />
                    </div>
                    <Flex.Item>
                        <div className="title_text">IPhone X 16G 2009限量版</div>
                        <div>红色 / 16G</div>
                        <div className="price_text">￥5000</div>
                    </Flex.Item>
                    <div className="input_num">
                        <InputItem
                            type="number"
                            value={this.state.numValue1}
                            onChange={(val)=>{this.setState({
                                numValue1: val
                            })}}
                        />
                    </div>
                    <div className="input_delete">
                        删除
                    </div>
                </Flex>
            </Card>
            <Card className="cart_card">
                <div className="cart_card_underline">
                    <input type="checkbox" checked={this.state.checkbox2} onChange={()=>{this.setState({
                        checkbox2: !this.state.checkbox2
                    })}} />
                    <span className="cart_card_shopname">阿呆的店铺</span>
                </div>
                <Flex className="cart_card_container">
                    <input type="checkbox" checked={this.state.checkbox2} onChange={()=>{this.setState({
                        checkbox2: !this.state.checkbox2
                    })}} />
                    <div className="cart_card_img">
                        <img src="./images/4.png" />
                    </div>
                    <Flex.Item>
                        <div className="title_text">IPhone X 16G 2009限量版</div>
                        <div>红色 / 16G</div>
                        <div className="price_text">￥5000</div>
                    </Flex.Item>
                    <div className="input_num">
                        <InputItem
                            type="number"
                            value={this.state.numValue2}
                            onChange={(val)=>{this.setState({
                                numValue2: val
                            })}}
                        />
                    </div>
                    <div className="input_delete">
                        删除
                    </div>
                </Flex>
            </Card>
            <Bottom>我是有底线的</Bottom>

            <div style={{height:'3.5rem'}}></div>
            <div className="putincart cart_summary">
                <div className="secondary_btn" style={{width:'60%',fontSize:'0.8rem'}}>合计：￥0</div>
                <a className="primary_btn" style={{width:'40%'}}>结算（{this.state.checkbox0+this.state.checkbox1+this.state.checkbox2}）</a>
            </div>
        </Layout>
    }
}

const BasicInputExampleWrapper = createForm()(Cart);
export default BasicInputExampleWrapper;
// export default LoadingHoc(Cart);
