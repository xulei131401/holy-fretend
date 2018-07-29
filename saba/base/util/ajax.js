import axios from 'axios';

export default {
    _hash:"",
    baseInstance(){
        //①自定义实例
        let axiosInstance =  axios.create({
            headers:{
                // "AJAX":"json1",
                // "Content-Type":"application/json",
                // "Origin":""
            },
            // baseURL:'',
            timeout: 15000,                         //超时设置，单位毫秒
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',         // default
            responseType: 'json',                   // default,options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        });

        //②请求前拦截器
        axiosInstance.interceptors.request.use((config) => {
            return config;
        }, (error) => {
            return Promise.reject(error);
        })


        //③添加响应拦截器
        axiosInstance.interceptors.response.use((response) => {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        return axiosInstance;
    },
    result(callback, obj, success, error){
        callback.then((response) => {
            success && success(response.data);
        }).catch((err) => {
            error && error(err);
        });
    },
    getJson(obj, success, error) {
        this.result(this.baseInstance().request({
            url: obj.url,
            method: 'get',
            params: obj.params,
        }), obj, success, error);
    },
    postJson(obj, success, error) {
        this.result(this.baseInstance().request({
            url: obj.url,
            method: 'post',
            params: obj.params,
            data:obj.data
        }), obj, success, error);
    }


}