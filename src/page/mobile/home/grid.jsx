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
    generateGrid(cell, key){
        var vdom = [];
        console.log(cell);
        for (let i in cell) {
            const data = cell[i];
            const keyz = key + i + "";
            if (data.hasOwnProperty('cells')) {
                let list = [];
                // console.log(data)
                list.push(this.generateGrid(data.cells));
                vdom.push(
                    <Flex.Item key={keyz}>
                        <Flex>
                            {list}
                        </Flex>
                    </Flex.Item>
                );
            } else {
                vdom.push(
                    <Flex.Item key={keyz}>
                        <Link to={data.url}><img src={data.image_url} className="grid-img"/></Link>
                    </Flex.Item>
                );
            }
        }
        return vdom;
    }

    render(){
        let content = [];
        if (this.props.gridData && this.props.gridData.data) {
            var gridCells = this.props.gridData.data.cells;
            content = this.generateGrid(gridCells, 0);
        }

        return <div className="grid_view">
            <Flex>
            {content}
            </Flex>
            <WhiteSpace />
        </div>
    }
}
