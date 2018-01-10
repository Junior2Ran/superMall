import React from 'react';
import { Result, Icon } from 'antd-mobile';
import Submit from "../../../../components/submit/index.jsx";

export default class Payment extends React.Component {
    static contextTypes = {  
        router: React.PropTypes.object
    }

    render() {
        return <div>
            <Result
                img={<Icon type="check-circle" style={{ fill: '#f28b12', width: '60px', height: '60px' }} />}
                title="支付成功"
                message="您已完成支付，点击下面按钮回到首页"
            />
            <Submit onClick={() => {this.context.router.history.push('/home');}}>回到首页</Submit>
        </div>
    }
}