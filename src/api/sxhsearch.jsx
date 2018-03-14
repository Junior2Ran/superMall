import http from '../common/http.jsx';

let devURL = "http://wfshop.andysheng.cn"; // 测试地址

var api = {
    getSearchResults(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/search",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getCategory(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/category",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    }
};

export default api;