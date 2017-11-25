import React from 'react';
import { WhiteSpace, WingBlank, Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Card from "../../../components/card/index.jsx";

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
    	
        return <Card>
            <WhiteSpace />
            <WingBlank>商品详情</WingBlank>
            <WhiteSpace />
            {this.props.ImgsData.map((img, key)=>{
                return <img src={img.img_url} key={key} style={{width:'100%'}}/>
            })}


            {/*<StickyContainer>
                <Tabs tabs={tabs}
                    initalPage={1}
                    renderTabBar={renderTabBar}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        content 1
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        content 2
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        content 3
                    </div>
                </Tabs>
            </StickyContainer>*/}
        </Card>
    }
}

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}

const tabs = [
    { title: '概述' },
    { title: '参数' },
    { title: '意外险' },
];
