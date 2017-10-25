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
    generateGrid(data, key){
        var vdom = [];
        console.log(data);
        if (data.hasOwnProperty('cells')) {
            let list = [];
            data.cells.map((item, index) => {
                var keyz = key + index + "";
                list.push(this.generateGrid(item, keyz));
            });
            const orientation = data.orientation;

            if (orientation === 'h') {
                vdom.push(
                    <Flex key={key}>
                        {list}
                    </Flex>
                );
            } else {
                <Flex.Item key={key}>
                    <Flex>
                        {list}
                    </Flex>
                </Flex.Item>
            }
            
        } else {
            vdom.push(
                <Flex.Item key={key}>
                    <Link to={data.url}><img src={data.image_url} className="grid-img"/></Link>
                </Flex.Item>
            );
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
