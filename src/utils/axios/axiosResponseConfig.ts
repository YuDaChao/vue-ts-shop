export interface IAxiosResponseConfig<T> {
  code: number;
  data: T;
  msg: string;
}

// 基本 Ajax 格式
export interface BaseAjax {
  get: <T>(url: string, config?: object) => Promise<IAxiosResponseConfig<T>>;
  delete?: <T>(url: string, config?: object) => Promise<IAxiosResponseConfig<T>>;
  head?: <T>(url: string, config?: object) => Promise<IAxiosResponseConfig<T>>;
  options?: <T>(url: string, config?: object) => Promise<IAxiosResponseConfig<T>>;
  post: <T>(url: string, data?: object, config?: object) => Promise<IAxiosResponseConfig<T>>;
  put?: <T>(url: string, data?: object, config?: object) => Promise<IAxiosResponseConfig<T>>;
  patch?: <T>(url: string, data?: object, config?: object) => Promise<IAxiosResponseConfig<T>>;
}
