import React from 'react';
import Layout from "../../../common/layout/layout.jsx";
import {Carousel, WhiteSpace, WingBlank, Modal, List, Button} from 'antd-mobile';
import PutInCart from './putincart.jsx';
import CartModal from './cartmodal.jsx';
import './index.less';

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    render() {
    	
        return <Layout header={true}>
            <Carousel className="my-carousel"
                autoplay={true}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
            >
                <img src="./images/1.jpg" style={{width:'100%'}} />
                <img src="./images/2.jpg" style={{width:'100%'}} />
                <img src="./images/3.jpg" style={{width:'100%'}} />
            </Carousel>
            <WingBlank size="lg">
                <h3>联想超级战舰电脑<small>【大显卡，大怪兽】</small></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae cumque vitae excepturi deleniti corporis quos sapiente quis fugiat accusamus, hic deserunt cupiditate nostrum dolorum, assumenda. Corporis, laborum provident accusamus repellendus?</p>
                <h2>￥6999</h2>
            </WingBlank>
            <WhiteSpace size="lg"/>
            ---
            <WingBlank size="lg">商品详情</WingBlank>
            <WhiteSpace />
            <img src="./images/1.jpg" style={{width:'100%'}} />
            <img src="./images/2.jpg" style={{width:'100%'}} />
            <img src="./images/3.jpg" style={{width:'100%'}} />
            <WhiteSpace size="lg"/>
            <PutInCart style={{height:'3.125rem'}}
                showModal={this.toggleModal.bind(this)}
            />

            <CartModal modal={this.state.modal} hideModal={this.toggleModal.bind(this)}/>
        </Layout>
    }
}
