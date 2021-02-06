/**
 * 基于axios封装的请求模块
 */
import axios from "axios"

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})


/**
 * 通过nuxtjs的插件处理机制，获取上下文对象 （query、params、req、res、app、 store...）
 * 允许在运行 Vue.js 应用程序之前执行 js 插件。
 * 需要使用自己的库或第三方模块时特别有用
 * 需要注意的是，在任何 Vue 组件的生命周期内，
 *  只有 beforeCreate 和 created 这两个方法会在 客户端和服务端被调用。
 * 其他生命周期函数仅在客户端被调用。
 */
// 插件到处函数必须作为default 成员
 export default ({store}) => {
    // 请求拦截器
    // request interceptor  请求头拦截器
    request.interceptors.request.use(function (config) {
        // Do something before request is sent 
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config;
    }, function (error) {
        // Do something with request error 请求还没有发出去失败的处理
        return Promise.reject(error);
    });

    //   response interceptor 返回体拦截器
    request.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
}



