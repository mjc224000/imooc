const getToken=(function () {
    var _Token=null;
    return function getToken(Token) {
        if(!_Token && Token)
            _Token=Token

        return _Token
    }
})()

module.exports.getToken=getToken;
