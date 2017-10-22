import React from 'react';
import {Carousel} from 'antd-mobile';
import Layout from "../../../common/layout/layout.jsx";

export default class Home extends React.Component {
    constructor(props,context) {
        super(props,context);
    }
    render(){
        return <Layout header={true}>
            <Carousel className="my-carousel"
            autoplay={true}
            infinite
            selectedIndex={1}
            swipeSpeed={35}
            >
                <div><img src='./images/chs_banner1.jpg' style={{width:'100%'}}/></div>
                <div><img src='./images/chs_banner2.jpg' style={{width:'100%'}}/></div>
                <div><img src='./images/chs_banner3.jpg' style={{width:'100%'}}/></div>
            </Carousel>
            asd
        </Layout>
    }
}
