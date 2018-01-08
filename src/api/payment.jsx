import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postCharge(type, callback) {
        http.ajax({
            method: 'POST',
            url: getServerHost() + '/charge/1',
            data: {
                amount: 0.01,
                channel: 'wx'
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
