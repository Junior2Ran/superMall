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
            <Card style={{lineHeight:'initial'}}>
                <div style={{borderBottom:'1px solid #ccc',padding:'0.8rem'}}>
                    <input type="checkbox" />
                    <span style={{marginLeft:'1rem'}}>阿呆的店铺</span>
                </div>
                <Flex style={{borderBottom:'1px solid #ccc',padding:'0.8rem'}}>
                    <input type="checkbox" />
                    <Flex.Item>
                        <img src="./images/4.png" alt="" style={{height:'5rem'}} />
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{fontSize:'1.2rem'}}>IPhone X</div>
                        <div>红色 / 16G</div>
                        <div style={{color:'red',fontSize:'1.2rem',marginLeft:'-4px'}}>￥5000</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <InputItem
                                type="number"
                                defaultValue="1"
                            />
                        </div>
                    </Flex.Item>
                    <div style={{flex:'0 0 3rem'}}>
                        删除
                    </div>
                </Flex>
                <Flex style={{padding:'0.8rem'}}>
                    <input type="checkbox" />
                    <Flex.Item>
                        <img src="./images/5.png" alt="" style={{height:'5rem'}} />
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{fontSize:'1.2rem'}}>IPhone X</div>
                        <div>红色 / 16G</div>
                        <div style={{color:'red',fontSize:'1.2rem',marginLeft:'-4px'}}>￥5000</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <InputItem
                                type="number"
                                defaultValue="1"
                            />
                        </div>
                    </Flex.Item>
                    <div style={{flex:'0 0 3rem'}}>
                        删除
                    </div>
                </Flex>
            </Card>
            <Card style={{lineHeight:'initial'}}>
                <div style={{borderBottom:'1px solid #ccc',padding:'0.8rem'}}>
                    <input type="checkbox" />
                    <span style={{marginLeft:'1rem'}}>阿呆的店铺</span>
                </div>
                <Flex style={{padding:'0.8rem'}}>
                    <input type="checkbox" />
                    <Flex.Item>
                        <img src="./images/4.png" alt="" style={{height:'5rem'}} />
                    </Flex.Item>
                    <Flex.Item>
                        <div style={{fontSize:'1.2rem'}}>IPhone X</div>
                        <div>红色 / 16G</div>
                        <div style={{color:'red',fontSize:'1.2rem',marginLeft:'-4px'}}>￥5000</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <InputItem
                                type="number"
                                defaultValue="1"
                            />
                        </div>
                    </Flex.Item>
                    <div style={{flex:'0 0 3rem'}}>
                        删除
                    </div>
                </Flex>
            </Card>
            <Bottom>我是有底线的</Bottom>
            <div style={{height:'3.5rem'}}></div>
            <div className="putincart" style={{zIndex:'999',bottom:'3.125rem'}}>
                <a to="/cart" className="secondary_btn" style={{width:'60%'}}>合计：￥0</a>
                <a onClick={()=>{this.props.showModal && this.props.showModal()}} className="primary_btn" style={{width:'40%'}}>结算</a>
            </div>
        </Layout>
    }
}

const BasicInputExampleWrapper = createForm()(Cart);
export default BasicInputExampleWrapper;
// export default LoadingHoc(Cart);
