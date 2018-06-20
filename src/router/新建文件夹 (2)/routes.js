// 路由采用分块加载
// require.ensure([], () => r(require('模块地址')), '模块名(模块名相同的所有模块会打包成一个文件)')

export default [
    {
        path: '/',
        component: require('@/components/page'),
        children: [
            {
                path: '/',
                component: (r) => require.ensure([], () => r(require('@/components/page/home')), 'home')
            },
            {
                path: '/date', // 老黄历
                name: 'date',
                component: (r) => require.ensure([], () => r(require('@/components/page/date')), 'date')
            },
        ]
    }, {
        path: '*',
        component: require('@/components/page/404')
    }
]
