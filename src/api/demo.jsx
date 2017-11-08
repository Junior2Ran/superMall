import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    getPermissionList(type, callback) {
        http.fetch({
            url: getServerHost() + '/api/permissionlist',
            data: {
                type: type
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
