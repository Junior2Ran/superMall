import { wxconfig } from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postJsApiData(url, callback) {
        http.ajax({
            method: 'POST',
            url: 'http://supermall.junior2ran.cn/auth',
            data: {
                url: url
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
