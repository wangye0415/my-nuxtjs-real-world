/**
 * nuxt.js配置文件
 */

export default {
    router: {
        // 设置当前激活路由 默认选中样式
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除nuxt.js  基于pages目录默认生成的路由表规则
            routes.splice(0)
            routes.push(...[{
                path: '/',
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                        path: '', //默认子路由,
                        name: 'home',
                        component: resolve(__dirname, 'pages/home/'),
                    },
                    {
                        path: '/login', // 登录页面
                        name: 'login',
                        component: resolve(__dirname, 'pages/login/'),
                    },
                    {
                        path: '/register', // 注册页面
                        name: 'register',
                        component: resolve(__dirname, 'pages/login/'),
                    },
                    {
                        path: '/profile/:username', // 个人信息页面
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile/'),
                    },
                    {
                        path: '/settings', // 个人信息页面
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings/'),
                    },
                    {
                        path: '/editor/:slug?', //  如果有slug参数 则为编辑页面 否则为创建文章
                        name: 'editor',
                        component: resolve(__dirname, 'pages/editor/'),
                    },
                    {
                        path: '/article/:slug', // 文章详情
                        name: 'article',
                        component: resolve(__dirname, 'pages/article/'),
                    },
                ]
            }])
        }
    },
    // 注册插件
    plugins:[
        '~/plugins/request.js',
        '~/plugins/dayjs.js',
    ],
    // 配置服务选项
    server:{
        host:'0.0.0.0',
        port:3000
    }
    // modules: [
    //     // 请求代理配置，解决跨域
    //     '@gauseen/nuxt-proxy'
    // ],
    // proxyTable: {
    //     '/service': {
    //         target: 'https://conduit.productionready.io',
    //         ws: false
    //     }
    // }
}