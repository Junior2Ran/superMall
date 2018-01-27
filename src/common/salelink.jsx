/*
模拟分销
 */
import queryString from 'query-string';

function getMyOpenId(){
    return localStorage.getItem("openid");
}

function getMyNickname(){
    return localStorage.getItem("nickname");
}

function getUId() {
    return queryString.parse(location.search).uid;
}

function getFromUser(){
    const parsed = queryString.parse(location.search);
    return parsed.from_user;
}

function generateSaleLink(){
    const parsed = queryString.parse(location.search);
    delete parsed.code;     // 先删除code和state参数，消除干扰
    delete parsed.state;
    const myopenid = getMyOpenId();

    // 第一次扫码，带uid  ||  通过分享，但是自己是代理微商from_user是自己的openid
    if (parsed.uid || parsed.from_user === myopenid) {       
        return '?from_user=' + myopenid;
    }

    var newObj = {};
    var ismine = false;
    newObj.from_user = parsed.from_user;
    delete parsed.from_user;     // 删除from_user参数，开始生成salelink
    for(var i in parsed) {
        if (parsed[i] === myopenid) {
            ismine = true;      // 存在分享环
            break;
        } else {
            newObj[i] = parsed[i];
        }
    }
    
    if (i && !ismine) {         // 若已有分销链salelink但无分享环，分享链+1
        const index = parseInt(i)+1;
        newObj[index] = myopenid;
    } else if(i && ismine) {    // 若已有分销链salelink且有分享环，分享链切断
        newObj[i] = myopenid;
    } else {                    // 若无分销链salelink
        newObj[1] = myopenid;
    }
    const stringified = queryString.stringify(newObj);
    return '?'+stringified;
}

const locManager = {
    getMyOpenId,
    getMyNickname,
    getUId,
    getFromUser,
    generateSaleLink
}

export default locManager;
