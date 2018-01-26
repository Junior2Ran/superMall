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
    postOpenId(uid, openid, callback) {
    	http.fetch({
    		method: 'GET',
            url: 'http://10.108.165.27/hongyu/api/postOpenId',
            data: {
            	uid: uid,
            	openId: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    }
}

export default api;
