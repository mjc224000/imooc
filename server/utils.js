const getToken=(function () {
    var Token=null;
    return function getToken() {
        if(!Token)
            Token=Math.random().toString();
        return Token
    }
})()
module.exports.getToken=getToken