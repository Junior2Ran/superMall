import React from 'react';
import {Link} from 'react-router-dom';
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
        if (this.props.carouselData && this.props.carouselData.data) {
            var content = this.props.carouselData.data.map((data, index) => {
                return <Link to={data.url} key={index}>
                    <img src={data.img_url} className="carousel-img" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
                </Link>
            });
        }
        
        return <div className="carousel_view">
            <Carousel className="my-carousel"
                autoplay={true}
                infinite
                selectedIndex={0}
                swipeSpeed={35}
            >
                {content}
            </Carousel>
            <WhiteSpace size='xl' />
        </div>
    }
}
