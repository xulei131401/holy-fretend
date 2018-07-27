import axios from 'axios';
var AJAX = {
    _hash:"",
    _cache:{}, //防ajax重复提交
    base:function(url,params,method,responseType,success,error){
        axios({
            method: method,
            url: url,
            data: params,//data不会把参数默认拼接到url后头，而params会默认拼接，要注意
            headers:{AJAX:"json",Origin:"http://www.baidu.com"},
            // baseURL:'http//bingo.store.com/',
            timeout: 15000,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN', // default
            responseType: responseType, // default,options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        }).then(function (response) {
            AJAX._cache[url] = true;
            success && success(response.data);
          }).catch(function (err) {
            AJAX._cache[url] = false;
            error && error(err);
          });
    },
    getJson:function (url,success,error) {
        AJAX.base(url,{},'get','json',success,error);
    },
    postJson:function (url,params,success,error) {
        AJAX.base(url,params,'post','json',success,error);
    },
    getLocalJson:function (url,success,error) {
        
    }

};


export {AJAX};