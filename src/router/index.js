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
    path: '/schedule',
    component: Layout,
    redirect: '/schedule/index',
    name: '调度中心',
    icon: 'zujian',
    children: [
      { path: 'map', icon: 'zujian', component: _import('schedule/map'), name: '首页实时地图 ' },
      { path: 'orderlist', icon: 'zujian', component: _import('schedule/orderlist'), name: '订单列表' }
    ]
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/invoice',
    name: '用户管理',
    icon: 'tubiao',
    children: [
      { path: 'invoice', icon: 'tubiao', component: _import('users/invoice'), name: '发货方' },
      { path: 'receiver', icon: 'tubiao', component: _import('users/receiver'), name: '收货方' }
    ]
  },
  {
    path: '/fee',
    component: Layout,
    redirect: 'noredirect',
    name: '计费管理',
    icon: 'zonghe',
    children: [
      { path: 'partner', icon: 'zonghe', component: _import('fee/partner'), name: '合作方收费' },
      { path: 'retail', icon: 'zonghe', component: _import('fee/retail'), name: '散户计费' }
    ]
  },
  {
    path: '/work',
    component: Layout,
    redirect: 'noredirect',
    name: '工作管理',
    icon: '404',
    children: [
      { path: 'employee', icon: '404', component: _import('work/employee/index'), name: '员工管理' },
      { path: 'car', icon: '404', component: _import('work/car/index'), name: '车辆管理' },
      { path: 'schedule', icon: '404', component: _import('work/schedule/index'), name: '排班管理' },
      { path: 'region', icon: '404', component: _import('work/region/index'), name: '区域管理' },
      { path: 'leave', icon: '404', component: _import('work/leave/index'), name: '请假替班' },
      { path: 'flow', icon: '404', component: _import('work/flow/index'), name: '流程管理' }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: 'noredirect',
    name: '统计管理',
    icon: 'bug',
    noDropdown: false,
    children: [
      { path: 'employeework', icon: 'bug', component: _import('statistics/employeework'), name: '员工工作统计' },
      { path: 'car', icon: 'bug', component: _import('statistics/car'), name: '车辆信息统计' },
      { path: 'order', icon: 'bug', component: _import('statistics/order'), name: '订单统计' }

    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: '/excel/index',
    name: '日志审计',
    icon: 'EXCEL',
    noDropdown: true,
    children: [
      { path: 'audit', icon: 'EXCEL', component: _import('excel/index'), name: '日志审计' }
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
      { path: 'account', icon: 'zujian', component: _import('sysadmin/account/index'), name: '账户管理 ' },
      { path: 'org', icon: 'zujian', component: _import('sysadmin/org/index'), name: '组织管理' },
      { path: 'role', icon: 'zujian', component: _import('sysadmin/role/index'), name: '角色管理' },
      { path: 'permission', icon: 'zujian', component: _import('sysadmin/permission/index'), name: '权限管理' },
      { path: 'resource', icon: 'zujian', component: _import('sysadmin/resource/index'), name: '资源管理' }
    ]
  }
]
