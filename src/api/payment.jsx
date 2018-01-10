import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postCharge(callback) {
        http.ajax({
            method: 'POST',
            url: getServerHost() + '/charge/12345678',
            data: {
                amount: 1,
                channel: 'wx_wap',
                extra: {
                    result_url: 'http://127.0.0.1:8080/#/payment'
                }
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
