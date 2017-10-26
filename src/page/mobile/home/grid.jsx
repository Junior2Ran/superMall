import React from 'react';
import {Link} from 'react-router-dom';
import {WhiteSpace,Flex} from 'antd-mobile';

export default class Grid extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    componentDidMount() {
    }

    // 生成栅格布局
    generateGrid(data, key, parentOrientation='h'){
        var vdom = [];
        if (data.hasOwnProperty('cells')) {
            let list = [];
            list = data.cells.map((item, index) => {
                var keyz = key + index + "";
                return this.generateGrid(item, keyz, data.orientation);
            });
            const cellOrientation = data.orientation;

            if (cellOrientation === 'h') {
                vdom.push(
                    <Flex key={key}>
                        {list}
                    </Flex>
                );
                vdom.push(<WhiteSpace key={`ws${key}`}/>);
            } else {
                vdom.push(
                    <Flex.Item key={key}>
                        {list}
                    </Flex.Item>
                );
            }
            
        } else {
            if (parentOrientation === 'h') {
                vdom.push(
                    <Flex.Item key={key}>
                        <Link to={data.url}><img src={data.image_url} className="grid-img"/></Link>
                    </Flex.Item>
                );
            } else {
                vdom.push(
                    <Flex key={key}><Flex.Item>
                        <Link to={data.url}><img src={data.image_url} className="grid-img"/></Link>
                    </Flex.Item></Flex>
                );
                vdom.push(<WhiteSpace key={`ws${key}`}/>);
            }
        }
        return vdom;
    }

    render(){
        let content = [];
        if (this.props.gridData && this.props.gridData.data) {
            const data = this.props.gridData.data;
            content = this.generateGrid(data, 0);
        }

        return <div className="grid_view">
            {content}
            <WhiteSpace />
        </div>
    }
}
