import request from "@/utils/axios/request";

import { ICategoryResponse } from "./types";

/**
 * 获取分类列表
 */
export const queryCategoryList = () =>
  request.get<ICategoryResponse>("/categories");
