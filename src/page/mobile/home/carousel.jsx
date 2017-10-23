import React from 'react';
import {Carousel, WhiteSpace} from 'antd-mobile';

export default class MyCarousel extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render(){

        return <div>
            <Carousel className="my-carousel"
                autoplay={true}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
            >
                <a href="javascript:"><img src='./images/chs_banner1.jpg' style={{width:'100%'}} /></a>
                <a href="javascript:"><img src='./images/chs_banner2.jpg' style={{width:'100%'}} /></a>
                <a href="javascript:"><img src='./images/chs_banner3.jpg' style={{width:'100%'}} /></a>
            </Carousel>
            <WhiteSpace size='xl' />
        </div>
    }
}
