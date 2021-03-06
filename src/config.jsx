function getServerHost() {

    const search = location.search.substr(1);
    const searchs = search.split("&");
    const params = {};
    for (const i in searchs) {
        const theParams = searchs[i].split("=");
        params[theParams[0]] = decodeURI(theParams[1]);
    }

    let devURL = "https://wfshop.andysheng.cn"; // 测试地址
    let localURL = "//127.0.0.1:8080"; // 本地地址
    let onlineURL = "//ymymmall.swczyc.com"; // 线上地址
    let wfURL = "//admin.swczyc.com/hyapi/ymmall"; //学弟后台

    if (/*/supermall\.junior2ran\.cn/.test(location.href) || */params.apitype == "online") {
        return onlineURL;
    } else {
        return wfURL;
    }
}

const wxconfig = {
    appId: 'wx6d6fd71af24c22c3',
    appSecret: '0094e566a880a093082b7e805f5b1c71',
    redirectUri: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6d6fd71af24c22c3&redirect_uri=http://ymymmall.swczyc.com/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
}

export { getServerHost, wxconfig };
