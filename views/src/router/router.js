import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        // { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        // { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },
        { path: 'order/detail/:order_id', title: '订单详情', name: 'order_detail', component: () => import('@/views/order/detail.vue') },
        { path: 'brand/detail/:brand_id', title: '品牌详情', name: 'brand-detail', component: () => import('@/views/goods/brand-detail.vue') },
        { path: 'address/detail/:id', title: '地址详情', name: 'address_detail', component: () => import('@/views/order/address_detail.vue') },
        { path: 'goods/detail/:id', title: '商品详情', name: 'goods_detail', component: () => import('@/views/goods/goods_detail.vue') },
        { path: 'refund/detail/:id', title: '退款详情', name: 'refund_detail', component: () => import('@/views/order/refund_detail.vue') },
        { path: 'account/add', title: '添加账户', name: 'account_add', component: () => import('@/views/account/account_detail.vue') },
        { path: 'account/detail/:id', title: '账户详情', name: 'account_detail', component: () => import('@/views/account/account_detail.vue') },
        { path: 'single/detail/:id', title: '单品营销详情', name: 'discount_detail', component: () => import('@/views/single/discount_detail.vue') },
        { path: 'single/add', title: '单品营销添加', name: 'discount_add', component: () => import('@/views/single/discount_detail.vue') },
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    // {
    //     path: '/access',
    //     icon: 'key',
    //     name: 'access',
    //     title: '权限管理',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue') }
    //     ]
    // },
    // {
    //     path: '/access-test',
    //     icon: 'lock-combination',
    //     title: '权限测试页',
    //     name: 'accesstest',
    //     access: 0,
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
    //     ]
    // },
    // {
    //     path: '/international',
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
    //     ]
    // },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
    //         {
    //             path: 'image-editor',
    //             icon: 'crop',
    //             name: 'image-editor',
    //             title: '图片预览编辑',
    //             component: () => import('@/views/my-components/image-editor/image-editor.vue')
    //         },
    //         {
    //             path: 'draggable-list',
    //             icon: 'arrow-move',
    //             name: 'draggable-list',
    //             title: '可拖拽列表',
    //             component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
    //         },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
    //         {
    //             path: 'scroll-bar',
    //             icon: 'android-upload',
    //             name: 'scroll-bar',
    //             title: '滚动条',
    //             component: () => import('@/views/my-components/scroll-bar/scroll-bar-page.vue')
    //         },
    //         {
    //             path: 'count-to',
    //             icon: 'arrow-graph-up-right',
    //             name: 'count-to',
    //             title: '数字渐变',
    //             // component: () => import('@/views/my-components/count-to/count-to.vue')
    //             component: () => import('@/views/my-components/count-to/count-to.vue')
    //         },
    //         {
    //             path: 'split-pane-page',
    //             icon: 'ios-pause',
    //             name: 'split-pane-page',
    //             title: 'split-pane',
    //             component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
    //         }
        ]
    },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '表单编辑',
    //     component: Main,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

    //     ]
    // },
    // // {
    // //     path: '/charts',
    // //     icon: 'ios-analytics',
    // //     name: 'charts',
    // //     title: '图表',
    // //     component: Main,
    // //     children: [
    // //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    // //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    // //     ]
    // // },
    // {
    //     path: '/tables',
    //     icon: 'ios-grid-view',
    //     name: 'tables',
    //     title: '表格',
    //     component: Main,
    //     children: [
    //         { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
    //         { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
    //         { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
    //         { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
    //         { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
    //     ]
    // },
    // {
    //     path: '/advanced-router',
    //     icon: 'ios-infinite',
    //     name: 'advanced-router',
    //     title: '高级路由',
    //     component: Main,
    //     children: [
    //         { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
    //         { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
    //     ]
    // },
    // {
    //     path: '/error-page',
    //     icon: 'android-sad',
    //     title: '错误页面',
    //     name: 'errorpage',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
    //     ]
    // },
    {
        path: '/goods',
        icon: 'android-apps',
        title: '商品管理',
        name: 'goods',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '商品列表',
                name: 'goods_list',
                component: () => import('@/views/goods/index.vue')
            },
            { 
                path: 'agentList',
                title: '平台商品库',
                name: 'agent_goods_list',
                component: () => import('@/views/goods/agentList.vue')
            },
            { 
                path: 'category',
                title: '分类管理',
                name: 'category_list',
                component: () => import('@/views/goods/category.vue')
            },
            { 
                path: 'brand',
                title: '品牌管理',
                name: 'brand_list',
                component: () => import('@/views/goods/brand.vue'),
            },
        ]
    },
    {
        path: '/order',
        icon: 'bag',
        title: '订单管理',
        name: 'order',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '批发订单列表',
                name: 'order_list',
                component: () => import('@/views/order/index.vue')
            },
            { 
                path: 'consignment',
                title: '代销订单列表',
                name: 'agent_order_list',
                component: () => import('@/views/order/consignment.vue')
            },
            { 
                path: 'address',
                title: '地址管理',
                name: 'address_list',
                component: () => import('@/views/order/address.vue')
            },
            { 
                path: 'refund',
                title: '退货管理',
                name: 'refund_list',
                component: () => import('@/views/order/refund.vue')
            },
        ]
    },
    {
        path: '/customer',
        icon: 'person',
        title: '客户管理',
        name: 'customer',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '客户列表',
                name: 'customer_list',
                component: () => import('@/views/customer/index.vue')
            },

        ]
    },
    {
        path: '/account',
        icon: 'person-stalker',
        title: '账户管理',
        name: 'account',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '账户设置',
                name: 'account_list',
                component: () => import('@/views/account/index.vue')
            },
            { 
                path: 'withdrawals',
                title: '余额管理',
                name: 'withdrawals_list',
                component: () => import('@/views/account/withdrawals.vue')
            },
            { 
                path: 'bills',
                title: '供应商账单',
                name: 'bills_list',
                component: () => import('@/views/account/bills.vue')
            },
        ]
    },
    {
        path: '/user',
        icon: 'android-person',
        title: '用户中心',
        name: 'user',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '个人资料',
                name: 'user_list',
                component: () => import('@/views/user/index.vue')
            },
        ]
    },
    {
        path: '/single',
        icon: 'android-archive',
        title: '营销活动',
        name: 'single',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '单品营销活动',
                name: 'single_list',
                component: () => import('@/views/single/index.vue')
            },
            { 
                path: 'orderdiscount',
                title: '订单营销活动',
                name: 'orderdiscount_list',
                component: () => import('@/views/single/orderdiscount.vue')
            },
        ]
    },
    {
        path: '/express',
        icon: 'social-yen',
        title: '运费设置',
        name: 'express',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '运费设置',
                name: 'express_list',
                component: () => import('@/views/express/index.vue')
            },
            { 
                path: 'expressfree',
                title: '免邮模板设置',
                name: 'expressfree_list',
                component: () => import('@/views/express/expressfree.vue')
            },
        ]
    },
    {
        path: '/coupon',
        icon: 'android-list',
        title: '代金券管理',
        name: 'coupon',
        component: Main,
        children: [
            { 
                path: 'index',
                title: '代金券列表',
                name: 'coupon_list',
                component: () => import('@/views/coupon/index.vue')
            },
        ]
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
