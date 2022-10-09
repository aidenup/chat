import axios from '../request'

namespace Login {
  export interface LoginReqForm {
    username: string
    password: string
  }
  export interface LoginResData {
    token: string
  }
}

export const account = {
  login(params: Login.LoginReqForm) {
    return axios.post<Login.LoginResData>('/account/login', params)
  }
}
