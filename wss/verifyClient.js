const url = require('url');
const share = require('../share');

module.exports = function (info) {

    const query = url.parse(info.req.url, true).query;
    const ws_key = share.ws_key;
    // ws_key 失效
    delete share.ws_key

    if (query.ws_key === ws_key) {
        return true;
    }

    return false;
}
