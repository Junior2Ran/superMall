/**
 * @ListView 使用了一些react-native中ListView的API，可以查询 https://mobile.ant.design/components/list-view-cn/
 * @ListView.dataSource 同上，查询 https://reactnative.cn/docs/0.26/listviewdatasource.html
 */
import React from 'react';
import ReactDOM from "react-dom";
import { ListView } from 'antd-mobile';
import Layout from "../../../common/layout/layout.jsx";

import category_data from "../../../static/data/category.js";   //mock假数据

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        //fixed id length bug
        sectionIDs = [];
        rowIDs = [];
        pageIndex = 0;
        dataBlobs = {};

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
                height: hei,
            });
        console.log(dataBlobs)
        }, 600);
        console.log(dataBlobs)
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = cata.length - 1;
        const row = (rowcata, sectionID, rowID) => {
            if (index < 0) {
                index = cata.length - 1;
            }
            const obj = cata[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                  <div
                    style={{
                      lineHeight: '50px',
                      color: '#888',
                      fontSize: 18,
                      borderBottom: '1px solid #F6F6F6',
                    }}
                  >{obj.name}</div>
                  <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                    <img style={{ height: '64px', marginRight: '15px' }} src={obj.img_url} alt="" />
                    <div style={{ lineHeight: 1 }}>
                      <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                      <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
                    </div>
                  </div>
                </div>
            );
        };

        return <Layout header={true} footer={true}>
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                  {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderSectionHeader={sectionData => (
                  <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                )}
                renderBodyComponent={() => <MyBody />}
                renderRow={row}
                renderSeparator={separator}
                style={{
                  height: this.state.height,
                  overflow: 'auto',
                }}
                pageSize={4}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        </Layout>
    }     
}

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];

const cata = [
    {
        "name":"手机数码",
        "img_url":"",
        "children":[
            {
                "name":"男装",
                "img_url":"",
                "children":[
                    {
                        "name":"马甲/背心",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/promimg/topics/201607/201607211606480715.png",
                    }
                ]
            },
            {
                "name":"家具内衣",
                "img_url":"",
                "children":[
                    {
                        "name":"男娃",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/gicon/cat15985592.png"
                    },
                    {
                        "name":"睡袍",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/gicon/cat18776491.png"
                    },
                    {
                        "name":"男士内裤",
                        "img_url":"http://img11.gomein.net.cn/image/prodimg/gicon/cat15985595.png"
                    },
                    {
                        "name":"家居服",
                        "img_url":"http://img13.gomein.net.cn/image/prodimg/gicon/cat18776489.png"
                    },
                    {
                        "name":"保暖内衣",
                        "img_url":"http://img10.gomein.net.cn/image/prodimg/promotion_image/promoImg/201508/20150812/cat18776492.png"
                    },
                    {
                        "name":"抹胸",
                        "img_url":"http://img12.gomein.net.cn/image/prodimg/promimg/topics/201607/201607211613210484.png"
                    }
                ]
            },
            {
                "name":"服饰配件",
                "img_url":"",
                "children":[
                    {
                        "name":"墨镜",
                        "img_url":"http://img10.gomein.net.cn/image/prodimg/promimg/topics/201607/201607211623370815.png"
                    },
                    {
                        "name":"围巾",
                        "img_url":"http://img10.gomein.net.cn/image/prodimg/gicon/cat15985605.png"
                    },
                    {
                        "name":"丝巾",
                        "img_url":"http://img13.gomein.net.cn/image/prodimg/gicon/cat15985602.png"
                    },
                    {
                        "name":"帽子",
                        "img_url":"http://img12.gomein.net.cn/image/prodimg/gicon/cat15985601.png"
                    }
                ]
            },
            {
                "name":"男鞋",
                "img_url":"",
                "children":[
                    {
                        "name":"休闲鞋",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/gicon/cat15985633.png"
                    },
                    {
                        "name":"布鞋",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/gicon/cat15985695.png"
                    },
                    {
                        "name":"板鞋",
                        "img_url":"http://img12.gomein.net.cn/image/prodimg/gicon/cat15985644.png"
                    },
                    {
                        "name":"帆布鞋",
                        "img_url":"http://img10.gomein.net.cn/image/prodimg/gicon/cat15985636.png"
                    },
                    {
                        "name":"凉鞋",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/promimg/topics/201607/201607211629070285.png"
                    }
                ]
            },
            {
                "name":"女鞋",
                "img_url":"",
                "children":[
                    {
                        "name":"女鞋",
                        "img_url":"http://img14.gomein.net.cn/image/prodimg/gicon/cat15985629.png"
                    },
                    {
                        "name":"高跟鞋",
                        "img_url":"http://img11.gomein.net.cn/image/prodimg/gicon/cat18776486.png"
                    },
                    {
                        "name":"松糕鞋",
                        "img_url":"http://img12.gomein.net.cn/image/prodimg/gicon/cat18776487.png"
                    },
                    {
                        "name":"休闲鞋",
                        "img_url":"http://img12.gomein.net.cn/image/prodimg/gicon/cat18776488.png"
                    }
                ]
            }
        ]
    }
];

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

let dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}
