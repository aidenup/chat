import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

/**
 * 数据返回的接口
 * 定义请求响应参数，不包含data
 */
interface Result {
  code: number,
  msg: string
}

/**
 * 请求响应参数，包含data
 */
interface ResultData<T = any> extends Result {
  data?: T
}

const URL: string = '/api/'

enum RequestEnums {
  TIMEOUT = 20000,
  OVERDUE = 600, // 登录失败
  FALL = 999, // 请求失败
  SUCCESS = 200 // 请求成功
}

const config = {
  // 默认地址
  baseURL: URL as string,
  // 超时时间
  timeout: RequestEnums.TIMEOUT as number,
  // 跨域时允许携带凭证
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    /**
     * 请求拦截器
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log(config);
        
        const token = localStorage.getItem('token') || ''
        return {
          ...config,
          headers: {
            'Authorization': token
          }
        }
      },
      (error: AxiosError) => {
        Promise.reject(error)
      }
    )

    /**
     * 响应拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        if(data.code === RequestEnums.OVERDUE) {
          // 登录信息失败，跳转到登录页面，并清空本地token
          localStorage.setItem('token', '')
          // router.replace({
          //   path: '/login'
          // })
          return Promise.reject(data)
        }
        // 全局错误信息拦截（防止下载文件时返回数据流 没有code，直接爆粗
        if(data.code && data.code !== RequestEnums.SUCCESS) {
          // ElMessage.error
          return Promise.reject(data)
        }
        return data
      }
    ),
    (error: AxiosError) => {
      const { response } = error
      if(response) {
        this.handleCode(response.status)
      }
      if(!window.navigator.onLine) {
        // ElMessage.error('网络连接失败')
      }
    }
  }

  handleCode(code: number): void {
    switch(code) {
      case 401:
        // ElMessage.error()
        break
      default:
        // 请求失败
        break
    }
  }

  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, { params })
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params)
  }
  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params)
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params })
  }
}

export default new RequestHttp(config)

/**
 * 使用
 * import axios from '@/axios/index.ts'
 * namespace Login {
 *  export interface LoginReqForm {
 *    username: string;
 *    password: string;
 *  }
 *  export interface LoginResData {
 *    token: string;
 *  }
 * }
 * 
 * export const login = (params: Login.LoginReqForm) => {
 *  return axios.post<Login.LoginResData>('/user/login', params)
 * }
 */
