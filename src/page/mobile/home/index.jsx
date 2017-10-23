import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';
import Layout from "../../../common/layout/layout.jsx";
import Carousel from "./carousel.jsx";
import Grid from "./grid.jsx";
import Separator from "./separator.jsx";
import homedata from "../../../static/data/home.js";

export default class Home extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
        console.log(homedata);
    }

    render(){

        return <Layout header={true}>
            <Carousel />
            <Separator />
            <Grid />
        </Layout>
    }
}
