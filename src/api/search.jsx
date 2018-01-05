import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    getSearchResults(callback) {
        http.fetch({
            url: getServerHost() + '/data/search_result.json',
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
