import axios from 'axios';
import {Toast} from 'antd-mobile';

export function getRedirectPath({type, avatar}) {
    let url = (type === 'boss') ? '/boss' : '/genius';

    if (!avatar) {
        url += 'info'
    }
    return url
}

export const _axios = (function () {
    let _axios = function () {

    }
    const arr=['post','get'];
    arr.forEach((key)=>{
        let temp = axios[key];
        let res = function () {
            Toast.loading('loading', 0);
            let _promise = temp(...arguments);
            res.then= function (fn) {
                let _fn=function(res){
                    fn(res);
                    Toast.hide()
                };
              return  _promise.then(_fn);
            }.bind(_promise);

            return res;
        }
        _axios[key] = res
    })



    return _axios
})()
