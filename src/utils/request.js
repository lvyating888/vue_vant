import axios from 'axios'//引入axios

import qs from 'qs' //axios POST请求传参方法

//在请求或响应被 then 或 catch 处理前拦截它们抛出问题所在

axios.interceptors.response.use(response => {
    console.log('Request was sent');
    return response;
}, function (error) {
    console.log(error.response.status)
    // 请求错误信息处理
    switch (error.response.status){
        case 400:
            Toast("错误请求");
            break;
        case 401:
            Toast("未授权,请重新登录");
            break;
        case 403:
            Toast("拒绝访问");
            break;
        case 404:
            Toast("请求错误,未找到该资源");
            break;
        case 405:
            Toast("请求方法未允许");
            break;
        case 408:
            Toast("请求超时");
            break;
        case 500:
            Toast("服务器错误");
            break;
        case 501:
            Toast("网络未实现");
            break;
        case 502:
            Toast("网络错误");
            break;
        case 503:
            Toast("服务不可用");
            break;
        case 504:
            Toast("网络超时");
            break;
        case 505:
            Toast("HTTP版本不支持该请求");
            break;
        default:
            break;
    }
});

export default {//导出方法
    /**
     * GET方法

         * @param {String} url [请求的url地址]

         * @param {Object} params [请求时携带的参数]

         */

    GET(url,params={}){
        return new Promise((resolve,reject) => {
            axios.get( url,{
                params:params
            }).then(response => {
                resolve(response);
            }) .catch(err => {
                reject(err);
            })
        })
    },
    /**
         * POST方法

         * @param {String} url [请求的url地址]

         * @param {Object} params [请求时携带的参数]

         */

    POST(url, params) {
        return new Promise((resolve, reject) => {
            axios.post( url, qs.stringify(params)).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }
}

/**

 *axios 自带请求超时属性设置

 *timeout: 4000, // 4 seconds timeout 超时

 **/