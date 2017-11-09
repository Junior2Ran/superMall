import React from 'react';
import Layout from "../../../common/layout/layout.jsx";
import {Carousel, WhiteSpace,WingBlank} from 'antd-mobile';
import PutInCart from './putincart.jsx';
import './product.less';

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render() {
    	
        return <Layout header={true}>
            <Carousel className="my-carousel"
                autoplay={true}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
            >
                <img src="./images/chs_banner1.jpg" style={{width:'100%'}} />
                <img src="./images/chs_banner2.jpg" style={{width:'100%'}} />
                <img src="./images/chs_banner3.jpg" style={{width:'100%'}} />
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
            <img src="./images/chs_banner1.jpg" style={{width:'100%'}} />
            <PutInCart isPutting={false} style={{height:'3.125rem'}}/>
        </Layout>
    }
}
