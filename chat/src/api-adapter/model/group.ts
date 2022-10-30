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
  createGroup(params: Group.CreateGroupForm) {
    return axios.post<Group.CreateGroupResData>('/group/create_group', params)
  }
}