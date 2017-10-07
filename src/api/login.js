import fetch from '@/utils/fetch'

export function loginByUsername(mobile, password) {
  const data = {
    mobile,
    password
  }
  return fetch({
    url: '/admin/doLogin',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/admin/doLogout',
    method: 'post'
  })
}

export function getUserInfo() {
  return fetch({
    url: '/sysadmin/get',
    method: 'get'
  })
}

