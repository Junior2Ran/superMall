import React from 'react';
import {Carousel, WhiteSpace,Flex} from 'antd-mobile';
import Layout from "../../../common/layout/layout.jsx";

export default class Home extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render(){

        return <Layout header={true}>
            <Carousel className="my-carousel"
                autoplay={true}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
            >
                <div><img src='./images/chs_banner1.jpg' style={{width:'100%'}} /></div>
                <div><img src='./images/chs_banner2.jpg' style={{width:'100%'}} /></div>
                <div><img src='./images/chs_banner3.jpg' style={{width:'100%'}} /></div>
            </Carousel>
            <WhiteSpace size='xl' />
            热门商品
            <WhiteSpace />
            <Flex>
              <Flex.Item><img src='./images/1.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/2.jpg' style={{width:'100%'}}/></Flex.Item>
            </Flex>
            <WhiteSpace />
            <Flex>
              <Flex.Item><img src='./images/1.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/2.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/3.jpg' style={{width:'100%'}}/></Flex.Item>
            </Flex>
            <WhiteSpace />
            <Flex>
              <Flex.Item><img src='./images/1.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/2.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/3.jpg' style={{width:'100%'}}/></Flex.Item>
            </Flex>
        </Layout>
    }
}
