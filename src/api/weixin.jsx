import { wxconfig } from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    postJsApiData(url, callback) {
        http.ajax({
            method: 'POST',
            url: 'http://ymymmall.swczyc.com/auth',
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
