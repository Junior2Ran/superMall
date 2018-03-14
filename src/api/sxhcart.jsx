import http from '../common/http.jsx';

let devURL = "http://wfshop.andysheng.cn"; // 测试地址

var api = {
    getCart(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/cart",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    addProduct(productid, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/cart/add/" + productid,
            data: {
                amount: 1
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    modifyProduct(cartitemid, amount, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/cart/modify/" + cartitemid,
            data: {
                amount: amount
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    deleteProduct(cartitemid, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/cart/modify/" + cartitemid,
            data: {
                amount: 0
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    }
};

export default api;