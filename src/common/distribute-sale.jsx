/*
模拟分销
 */
import queryString from 'query-string';

function getUA(){
    const u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
        return 'Android';   // A
    } else if (u.indexOf("iPhone") > -1) {
        return 'iPhone';    // B
    } else {
        return 'else';      // C
    }
}

function getMockId(){
    const plat = getUA();
    let id = 'C';
    if (plat == 'Android') {
        id = 'A';
    } else if (plat == 'iPhone') {
        id = 'B';
    }
    return id;
}

function getSaleLink(){
    const parsed = queryString.parse(location.search);
    return parsed.salelink;
}

function generateURL(){
    const parsed = queryString.parse(location.search);
    const myid = getMockId();
    const sourceid = parsed.user;
    if (sourceid == undefined) {
        parsed.user = myid;
        const stringified = queryString.stringify(parsed);
        location.search = stringified;
        return;
    }
    if (sourceid !== myid) {
        parsed.user = myid;
        if (parsed.salelink == undefined) {
            parsed.salelink = sourceid;
            const stringified = queryString.stringify(parsed);
            location.search = stringified;
            return;
        } 
        if (parsed.salelink.indexOf(myid) == -1 && parsed.salelink.indexOf(sourceid) == -1) {
            parsed.salelink += sourceid; 
            const stringified = queryString.stringify(parsed);
            location.search = stringified;
            return;
        } else if (parsed.salelink.indexOf(myid) > -1 && parsed.salelink.indexOf(sourceid) > -1) {
            const myindex = parsed.salelink.indexOf(myid); 
            const souceindex = parsed.salelink.indexOf(sourceid); 
            parsed.salelink = parsed.salelink.substr(0,Math.min(myindex,souceindex));
            const stringified = queryString.stringify(parsed);
            location.search = stringified;
            return;
        } 
        else {
            const index = Math.max(parsed.salelink.indexOf(myid),parsed.salelink.indexOf(sourceid)); 
            parsed.salelink = parsed.salelink.substr(0,index);
            const stringified = queryString.stringify(parsed);
            location.search = stringified;
            return;
        }
    }
    return;
}

const locManager = {
    getUA,
    getMockId,
    getSaleLink,
    generateURL
}

export default locManager;
