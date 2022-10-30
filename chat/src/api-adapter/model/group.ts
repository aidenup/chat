import axios from '../request'

export declare namespace Group {
  export interface CreateGroupForm {
    group_name: string,
    create_time: string
  }
  export interface CreateGroupResData {
    group_id: string
  }
}

export const group = {
  // 创建群聊
  createGroup(params: Group.CreateGroupForm) {
    return axios.post<Group.CreateGroupResData>('/group/create_group', params)
  },
  // 加入群
  joinGroup(params: {group_id: string}) {
    return axios.post('/group/join_group', params)
  },
  // 根据user_id 查询群
  selectByUserId() {
    return axios.get('/group/select_group_byuserid')
  }
}