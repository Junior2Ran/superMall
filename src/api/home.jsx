import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    getHomepage(callback) {
        http.fetch({
            url: getServerHost() + '/homepage',
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
