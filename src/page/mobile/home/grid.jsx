import React from 'react';
import {WhiteSpace,Flex} from 'antd-mobile';

export default class Grid extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
    }

    render(){

        return <div>
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
        </div>
    }
}
