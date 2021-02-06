// 验证是否登录的中间件

export default function({store,redirect}){
    // 如果没有user对象，则认为没有登录
    if(!store.state.user){
        return redirect('/login')
    }
}