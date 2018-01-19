
import React from 'react';
import {Link} from 'react-router-dom';
import {WhiteSpace,Flex} from 'antd-mobile';

export default class Grid extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
    }

    render(){
        if (this.props.gridData && this.props.gridData.data) {
            
        }

        return <div className="grid_view">
            <Flex>
              <Flex.Item><img src='./images/hdr4' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/hdr2.jpg' style={{width:'100%'}}/></Flex.Item>
            </Flex>
            <WhiteSpace />
            <Flex>
              <Flex.Item><img src='./images/hdr4' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/hdr2.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item><img src='./images/hdr5.png' style={{width:'100%'}}/></Flex.Item>
            </Flex>
            <WhiteSpace />

            <Flex>
              <Flex.Item><img src='./images/hdr2.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item>
                  <Flex>
                      <Flex.Item><img src='./images/hdr4' style={{width:'100%'}}/></Flex.Item>
                      <Flex.Item>
                          <Flex>
                              <Flex.Item><img src='./images/hdr2.jpg' style={{width:'100%'}}/></Flex.Item>
                              <Flex.Item><img src='./images/hdr5.png' style={{width:'100%'}}/></Flex.Item>
                          </Flex>
                      </Flex.Item>
                  </Flex>
                  <WhiteSpace />
                  <Flex>
                      <Flex.Item><img src='./images/hdr4' style={{width:'100%'}}/></Flex.Item>
                      <Flex.Item><img src='./images/hdr5.png' style={{width:'100%'}}/></Flex.Item>
                  </Flex>
                  <WhiteSpace />
              </Flex.Item>
            </Flex>
            <WhiteSpace />

            <Flex>
                <Flex.Item><img src='./images/hdr4' style={{width:'100%'}}/></Flex.Item>
                <Flex.Item>
                    <Flex><Flex.Item><img src='./images/hdr2.jpg' style={{width:'100%'}}/></Flex.Item></Flex>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item><img src='./images/hdr5.png' style={{width:'100%'}}/></Flex.Item>
                        <Flex.Item><img src='./images/hdr5.png' style={{width:'100%'}}/></Flex.Item>
                    </Flex>
                    <WhiteSpace />
                </Flex.Item>
            </Flex>
            <WhiteSpace />
        </div>
    }
}
