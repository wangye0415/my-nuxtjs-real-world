const cookieparser =process.server ? require('cookieparser'):undefined

// 在服务端渲染期间运行的都是同一个实例
// 为了方式数据冲突 务必要把state定义成一个函数，返回数据对象
export const state = () =>{
    return {
        // 当前登录用户的登录信息
        user: null
    }
}

export const mutations = {
    setUser(state,data){
        console.log(data)
        state.user = data
    }
}
export const  actions = {
    //  nuxtServerInit 是一个特殊的action方法
    // 会在服务端渲染期间自动调用
    // 作用是 初始化容器数据，传递数据给客户端使用
    
    nuxtServerInit({commit},{req}){
        let user = null
        // 如果请求头中有Cookie
        if(req.headers.cookie){
            // 使用 cookieparser 把cookie 字符串中转换为js对象
            const parsed =cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (error) {
                // cookie中没有定义任何内容
            }
        }
        // 提交mutation 修改state状态
        commit('setUser',user)
    }
}