import axios from 'axios';

// const RESPONSE_DATA_KEY = 'data';
// const RESPONSE_ERROR_MSG_KEY = 'errmsg';
// const RESPONSE_ERROR_CODE_KEY = 'errcode';

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
        axiosInstance.interceptors.request.use(
            (config) => {
                return config;
            }, (error) => {
                return Promise.reject(error);
            }
        )


        //③添加响应拦截器
        axiosInstance.interceptors.response.use(
            response => {
                if (response.data.errcode == 200) {
                    return Promise.resolve(response.data);
                } else {
                    return Promise.reject('网络异常，建议您刷新页面或者稍后再试');
                }
            },
            error => {
                switch (error.data.errcode) {
                    case 501:
                        console.log('我是501')
                        break;
                    case 503:
                        console.log('我是503')
                        localStorage.removeItem('token');
                        break;
                    default:
                }

                return Promise.reject('网络异常，建议您刷新页面或者稍后再试');
            }
        );

        return axiosInstance;
    },
    getJson(url, params) {
       return new Promise((resolve, reject) => {
           this.baseInstance().request({
               url: url,
               method: 'get',
               params: params,
           }).then( res => {
               resolve(res.data);
           }).catch( err => {
               reject(err)
           })
       });
    },
    postJson(url, params) {
        return new Promise((resolve, reject) => {
            this.baseInstance().request({
                url: url,
                method: 'post',
                params: params,
            }).then( res => {
                resolve(res.data);
            }).catch( err => {
                reject(err)
            })
        });
    }
}