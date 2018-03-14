import {getServerHost} from '../config.jsx';
import http from '../common/http.jsx';

var api = {
    addItemsToCart(quantity, callback) {
        http.ajax({
            // method: 'POST',
            url: getServerHost() + "/shopping_cart/add_items",
            data: {
                specificationid: 1,
                specialtyid: 1,
                isGroupPromotion: 1,
                quantity: quantity,
                wechat_id: 2
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    editItemsCountInCart(callback) {
        http.ajax({
            method: 'POST',
            url: 'http://' + getServerHost() + "/shopping_cart/edit_items",
            data: {
                // body: 'WF电商平台通用客户端',
                // total_fee: fee,
                // spbill_create_ip: '123.12.12.123',
                // notify_url: 'http://tobyli16.com/',
                // openid: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    deleteItemsInCart(callback) {
        http.ajax({
            method: 'POST',
            url: 'http://' + getServerHost() + "/shopping_cart/delete_items",
            data: {
                // body: 'WF电商平台通用客户端',
                // total_fee: fee,
                // spbill_create_ip: '123.12.12.123',
                // notify_url: 'http://tobyli16.com/',
                // openid: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getCartItemsList(callback) {
        http.ajax({
            method: 'GET',
            url: 'http://' + getServerHost() + "/shopping_cart/get_items",
            data: {
                // body: 'WF电商平台通用客户端',
                // total_fee: fee,
                // spbill_create_ip: '123.12.12.123',
                // notify_url: 'http://tobyli16.com/',
                // openid: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },

    getTotalPriceInCart(callback) {
        http.ajax({
            method: 'POST',
            url: 'http://' + getServerHost() + "/shopping_cart/total_price",
            data: {
                // body: 'WF电商平台通用客户端',
                // total_fee: fee,
                // spbill_create_ip: '123.12.12.123',
                // notify_url: 'http://tobyli16.com/',
                // openid: openid
            },
            success: (rs) => {
                callback && callback(rs);
            }
        });
    },


    //----------------------------------confirm orders api-------------------------------------------


};

export default api;