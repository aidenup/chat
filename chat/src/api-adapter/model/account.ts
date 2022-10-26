import axios from '../request'

export declare namespace Login {
  export interface LoginReqForm {
    email: string
    password: string
  }
  export interface LoginResData {
    token: string,
    username: string,
    id: string
  }
}

export const account = {
  login(params: Login.LoginReqForm) {
    return axios.post<Login.LoginResData>('/account/login', params)
  }
}
