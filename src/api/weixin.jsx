import { appId, appSecret } from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    getOpenId(code, callback) {
        http.fetch({
            url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
            data: {
                appid: appId,
                secret: appSecret,
                code: code,
                grant_type: 'authorization_code'
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getUserInfo(accessToken, openId, callback) {
        http.fetch({
            url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
            data: {
                access_token: accessToken,
                openid: openId
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
}

export default api;
