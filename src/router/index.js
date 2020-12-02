import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Whole.vue'),
            meta: {
                title: '整体页面布局'
            },
            children: [{
                    path: '/dashboard',
                    component: () => import('../page/Dashboard.vue'),
                    meta: {
                        title: '首页'
                    },
                    redirect:'/Home',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                        children: [{
                            path: '/Home',
                            component: () => import('../page/Dashboard.vue'),
                            meta: {
                                title: '首页'
                            },
                        }               
                ]
                },
                {
                    path: '/test1',
                    component: () => import('../page/test1/index.vue'),
                    meta: {
                        title: '一级菜单1'
                    },
                    redirect:'/test1/test1-1',     // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
                        children:[
                            {
                                path: 'test1-1',
                                component: () => import('../page/test1/test1-1.vue'),
                                meta: {
                                    title: '二级菜单1-1'
                                },
                            },
                            {
                                path: 'test1-2',
                                component: () => import('../page/test1/test1-2.vue'),
                                meta: {
                                    title: '二级菜单1-2'
                                },
                            },
                            {
                                path: 'test1-3',
                                component: () => import('../page/test1/test1-3.vue'),
                                meta: {
                                    title: '二级菜单1-3'
                                },
                            },
                            {
                                path: 'test1-4',
                                component: () => import('../page/test1/test1-4.vue'),
                                meta: {
                                    title: '二级菜单1-4'
                                },
                            },
                            {
                                path: 'test1-5',
                                component: () => import('../page/test1/test1-5.vue'),
                                meta: {
                                    title: '二级菜单1-5'
                                },
                            }
                        ]
                },
                {
                    path: '/test2',
                    component: () => import('../page/test2/index.vue'),
                    meta: {
                        title: '一级菜单2'
                    },
                    redirect:'/test2/test2-1',     // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                        children:[
                            {
                                path: 'test2-1',
                                component: () => import('../page/test2/test2-1.vue'),
                                meta: {
                                    title: '二级菜单2-1'
                                },
                            },
                            {
                                path: 'test2-2',
                                component: () => import('../page/test2/test2-2.vue'),
                                meta: {
                                    title: '二级菜单2-2'
                                },
                            },
                            {
                                path: 'test2-3',
                                component: () => import('../page/test2/test2-3.vue'),
                                meta: {
                                    title: '二级菜单2-3'
                                },
                            },
                        ]
                },
                {
                    path: '/test3',
                    component: () => import('../page/test3/index.vue'),
                    meta: {
                        title: '一级菜单3'
                    },
                    redirect:'/test3/test3-1',
                    children:[
                        {
                            path: 'test3-1',
                            component: () => import('../page/test3/test3-1.vue'),
                            meta: {
                                title: '二级菜单3-1'
                            }
                        },
                        {
                            path: 'test3-2',
                            component: () => import('../page/test3/test3-2.vue'),
                            meta: {
                                title: '二级菜单3-2'
                            }
                        },
                    ]
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import('../components/common/I18n.vue'),
                    meta: {
                        title: '国际化'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../page/Permission.vue'),
                    meta: {
                        title: '权限测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: () => import('../page/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: () => import('../page/403.vue'),
                    meta: {
                        title: '403'
                    }
                },
            ]
        },
        {
            // 登录页面
            path: '/login',
            component: () => import('../page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});