import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import axiosConfig from "./axiosConfig";
import { IAxiosResponseConfig, BaseAjax } from "./axiosResponseConfig";

const instance: AxiosInstance = axios.create(axiosConfig);

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    const token = ""
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// tslint:disable-next-line:only-arrow-functions
const request = <T>(config: AxiosRequestConfig = {}): Promise<IAxiosResponseConfig<T>> => {
  return new Promise((resolve, reject) => {
    instance
      .request<IAxiosResponseConfig<T>>(config)
      .then((resp) => {
        if (resp) {
          resolve(resp as any);
        } else {
          reject(resp as any);
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const ajax: BaseAjax = {
  get<T>(url: string, config: object = {}): Promise<IAxiosResponseConfig<T>> {
    return request<T>(
      Object.assign({}, config, {
        method: "GET",
        url
      })
    )
  },
  post<T>(url: string, config: object = {}): Promise<IAxiosResponseConfig<T>> {
    return request<T>(
      Object.assign({}, config, {
        method: "POST",
        url
      })
    )
  }
}

export default ajax;
