import {
  INavsResponse,
  IProductResponse
} from "@/api/home/types";

export interface IHomeState {
  navList: INavsResponse[],
  product: IProductResponse
}
