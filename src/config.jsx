function getServerHost() {

    const search = location.search.substr(1);
    const searchs = search.split("&");
    const params = {};
    for (const i in searchs) {
        const theParams = searchs[i].split("=");
        params[theParams[0]] = decodeURI(theParams[1]);
    }

    let devURL = "http://cp01-huiyan-01.epc.baidu.com:8080"; // 测试地址
    let hzURL = "http://cp01-jiaotongyun-4.epc.baidu.com:8080"; // 黄泽开发机
    let onlineURL = "http://huiyan.baidu.com"; // 线上地址

    if (/huiyan\.baidu\.com/.test(location.href) || params.apitype == "online") {
        return onlineURL;
    } else {
        return hzURL;
    }
}

export {getServerHost};
