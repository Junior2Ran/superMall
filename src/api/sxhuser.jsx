import http from '../common/http.jsx';

let devURL = "http://wfshop.andysheng.cn"; // 测试地址

var api = {
    getShipAddress(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/user/shipaddress",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getDefaultShipAddress(callback) {
        http.ajax({
            method: 'GET',
            url: devURL + "/user/shipaddress/default",
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    addShipAddress(name, phone, province, city, detail, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/user/shipaddress/add",
            data: {
                receiver_name: name,
                receiver_phone: phone,
                province: province,
                city: city,
                detail: detail
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    deleteShipAddress(id, callback) {
        http.ajax({
            method: 'POST',
            url: devURL + "/user/shipaddress/delete/" + id,
            data: {
                
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    }
};

export default api;