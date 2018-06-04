const getToken=(function () {
    var Token=null;
    return function getToken() {
        if(!Token)
            Token=Math.random().toString();
        return Token
    }
})()
const AppUser=(function () {
    let _User=null;
    return function (instance) {
        if(instance)
            _User=instance;
        return _User
    }
})()
module.exports.getToken=getToken;
module.exports._User=AppUser;