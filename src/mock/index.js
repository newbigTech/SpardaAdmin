import Mock from 'mockjs'
// import loginAPI from './login'
import articleAPI from './article'
// import roleAPI from './role'
import remoteSearchAPI from './remoteSearch'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
// Mock.mock(/\/useradmin\/doLogin/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/useradmin\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/useradmin\/get\.*/, 'get', loginAPI.getUserInfo)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)

// 搜索相关
Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)

// 角色
// Mock.mock(/\/search\/user/, 'get', roleAPI.getRoleList())

export default Mock
