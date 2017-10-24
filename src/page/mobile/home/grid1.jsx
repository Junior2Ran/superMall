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
        console.log(this.props.gridData)

        return <div className="grid_view">
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
              <Flex.Item><img src='./images/2.jpg' style={{width:'100%'}}/></Flex.Item>
              <Flex.Item>
                  <Flex>
                      <Flex.Item><img src='./images/1.jpg' style={{width:'100%'}}/></Flex.Item>
                      <Flex.Item>
                          <Flex>
                              <Flex.Item><img src='./images/2.jpg' style={{width:'100%'}}/></Flex.Item>
                              <Flex.Item><img src='./images/3.jpg' style={{width:'100%'}}/></Flex.Item>
                          </Flex>
                      </Flex.Item>
                  </Flex>
              </Flex.Item>
            </Flex>
            <WhiteSpace />
        </div>
    }
}