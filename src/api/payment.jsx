import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postCharge(callback) {
        http.ajax({
            method: 'POST',
            url: getServerHost() + '/charge/12345678',
            data: {
                amount: 1,
                channel: 'wx'
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
