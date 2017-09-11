import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'xinrenzhinan',
    noDropdown: true,
    children: [{ path: 'index', component: _import('introduction/index'), name: 'XXXX' }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '调度中心',
    icon: 'zujian',
    children: [
      { path: 'index', icon: 'shouce', component: _import('components/index'), name: '首页实时地图 ' },
      { path: 'tinymce', icon: 'shouce', component: _import('components/tinymce'), name: '订单列表' }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '用户管理',
    icon: 'tubiao',
    children: [
      { path: 'index', icon: 'from', component: _import('charts/keyboard'), name: '发货方' },
      { path: 'keyboard2', icon: 'from', component: _import('charts/keyboard2'), name: '收货方' }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '计费管理',
    icon: 'zonghe',
    children: [
      { path: 'form/edit', icon: 'shouce', component: _import('example/form'), name: '合作方收费', meta: { isEdit: true }},
      { path: 'form/create', icon: 'from', component: _import('example/form'), name: '散户计费' }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '工作管理',
    icon: '404',
    children: [
      { path: 'form/create1', icon: 'from', component: _import('example/form'), name: '员工管理' },
      { path: 'form/create2', icon: 'from', component: _import('example/form'), name: '车辆管理' },
      { path: 'form/create3', icon: 'from', component: _import('example/form'), name: '排班管理' },
      { path: 'form/create4', icon: 'from', component: _import('example/form'), name: '区域管理' },
      { path: 'form/create5', icon: 'from', component: _import('example/form'), name: '请假替班' },
      { path: 'form/create6', icon: 'from', component: _import('example/form'), name: '流程管理' }
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: '统计管理',
    icon: 'bug',
    noDropdown: true,
    children: [
      { path: 'log', component: _import('errlog/index'), name: '员工工作统计' },
      { path: 'log', component: _import('errlog/index'), name: '车辆信息统计' },
      { path: 'log', component: _import('errlog/index'), name: '订单统计' }

    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/index',
    name: '日志审计',
    icon: 'EXCEL',
    noDropdown: true,
    children: [
      { path: 'download', component: _import('excel/index'), name: '日志审计' }
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/sysadmin',
    component: Layout,
    redirect: '/sysadmin/account/index',
    name: '系统管理',
    icon: 'zujian',
    children: [
      { path: 'account', component: _import('sysadmin/account/index'), name: '账户管理 ' },
      { path: 'org', component: _import('sysadmin/org/index'), name: '组织管理' },
      { path: 'role', component: _import('sysadmin/role/index'), name: '角色管理' },
      { path: 'permission', component: _import('sysadmin/permission/index'), name: '权限管理' },
      { path: 'resource', component: _import('sysadmin/resource/index'), name: '资源管理' }
    ]
  }
]
