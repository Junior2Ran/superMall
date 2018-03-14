import http from '../common/http.jsx';

let devURL = "http://wfshop.andysheng.cn"; // 测试地址

var api = {
    getOrder(orderid, callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/order/" + orderid,
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getOrders(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/order",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getOrdersByType(typeid, callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/order",
            data: {
                type: typeid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    createOrder(products, amounts, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/order/create",
            data: {
                products: products,
                amounts: amounts
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    confirmOrder(id, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/order/" + id + "/confirm",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    deleteOrder(id, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/order/" + id + "/delete",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },
};

export default api;