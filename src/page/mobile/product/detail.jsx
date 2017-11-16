import React from 'react';
import {WhiteSpace, WingBlank, Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

export default class Product extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
    	
        return <div className="detail_container">
            <StickyContainer>
                <Tabs tabs={tabs}
                    initalPage={1}
                    renderTabBar={renderTabBar}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        <img src="./images/1.jpg" style={{width:'100%'}} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        <img src="./images/2.jpg" style={{width:'100%'}} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        <img src="./images/3.jpg" style={{width:'100%'}} />
                    </div>
                </Tabs>
            </StickyContainer>
        </div>
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