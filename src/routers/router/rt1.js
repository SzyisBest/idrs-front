export default [
    {
        // 这里就是 主页路径 /斜杠是默认你懂得
        path: '/',
        // redirect 是重定向到某个路径
        redirect: '/home',
    },
    {
        path: '/home',
        // component 是这个路由要加载的页面 其实就是组件 vue里面是组件的概念
        component: () => import("../../components/view/hello_world.vue")
        // redirect: '/HomePage',
        // chilren 是个array 代表子路由 就是在页面你要跳转的组件或者页面
        // children: [
        //     // 套娃
        //     {
        //         path: '/HomePage',
        //         component: () => import('../components/HelloWorld.vue'),
        //         redirect: '/MainComp',
        //         children: [
        //             {
        //                 path: '/MainComp',
        //                 name: 'MainHome',
        //                 component: () => import('../components/MainComp.vue')
        //             }
        //         ]
        //     }
        // ]
    }
]