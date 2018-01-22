import { getServerHost, wxconfig } from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postCharge(fee, openid, callback) {
        http.ajax({
            method: 'POST',
            url: 'http://tobyli16.com:8080/pay/wechat/mp/' + Date.parse(new Date()),
            data: {
                body: 'js pay',
                total_fee: fee,
                spbill_create_ip: '123.12.12.123',
                notify_url: 'http://tobyli16.com/',
                openid: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
