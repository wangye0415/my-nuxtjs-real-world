// 如果已经登录，页面不能访问
export default function({store,redirect}){
    // 如果有user对象，则认为已经登录，禁止跳转到登录页面
    if(store.state.user){
        return redirect('/')
    }
}