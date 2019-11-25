import request from "@/utils/axios/request";

import { INavsResponse, IProductResponse } from "./types";

/**
 * 获取首页分类导航菜单
 */
export const queryNavs = () => request.get<INavsResponse>("/navs")

/**
 * 获取首页商品列表
 */
export const queryProductList = () => request.post<IProductResponse>("/product_list")
