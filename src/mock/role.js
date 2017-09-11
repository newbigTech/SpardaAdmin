// import { param2Obj } from '@/utils'

const roleList = [{ 'id': 26, 'delFlag': 0, 'parentId': null, 'sort': 0, 'name': '超级管理员', 'enName': 'super_manager', 'usable': '1',
  'remarks': '', 'children': []}, {'id': 27, 'delFlag': 0, 'parentId': null, 'sort': 1, 'name': '客服主管', 'enName': 'server_manager',
    'usable': '1', 'remarks': '', 'children': [{ 'id': 28, 'delFlag': 0, 'parentId': 27, 'sort': 0, 'name': '售后客服', 'enName': 'server1',
      'usable': '1', 'remarks': '', 'children': [] }, { 'id': 29, 'delFlag': 0, 'parentId': 27, 'sort': 1, 'name': '售前客服', 'enName': 'server2', 'usable': '1', 'remarks': '', 'children': [] }] }
]

export default {
  getRoleList: () => roleList
}
