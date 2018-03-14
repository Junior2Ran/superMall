import http from '../common/http.jsx';

let devURL = "http://wfshop.andysheng.cn"; // 测试地址

var api = {
    getProductId(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/product/id",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getProduct(id, callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/product/" + id,
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getComment(id, callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/product/" + id + "/comment",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    }
};

export default api;