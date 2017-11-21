import React from 'react';
// import LoadingHoc from "../../../common/loading-hoc.jsx";
import Layout from "../../../common/layout/layout.jsx";
import Card from "../../../components/card/index.jsx";
import Bottom from "../../../components/bottom/index.jsx";
import { Flex, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less';

class Cart extends React.Component {
    
    render() {
        const { getFieldProps } = this.props.form;
        return <Layout footer={true}>
            <Card className="cart_card">
                <div className="cart_card_underline">
                    <input type="checkbox" />
                    <span className="cart_card_shopname">阿呆的店铺</span>
                </div>
                <Flex className="cart_card_container cart_card_underline">
                    <input type="checkbox" />
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
                            defaultValue="1"
                        />
                    </div>
                    <div className="input_delete">
                        删除
                    </div>
                </Flex>
                <Flex className="cart_card_container">
                    <input type="checkbox" />
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
                            defaultValue="1"
                        />
                    </div>
                    <div className="input_delete">
                        删除
                    </div>
                </Flex>
            </Card>
            <Card className="cart_card">
                <div className="cart_card_underline">
                    <input type="checkbox" />
                    <span className="cart_card_shopname">阿呆的店铺</span>
                </div>
                <Flex className="cart_card_container">
                    <input type="checkbox" />
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
                            defaultValue="1"
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
                <a className="primary_btn" style={{width:'40%'}}>结算</a>
            </div>
        </Layout>
    }
}

const BasicInputExampleWrapper = createForm()(Cart);
export default BasicInputExampleWrapper;
// export default LoadingHoc(Cart);
