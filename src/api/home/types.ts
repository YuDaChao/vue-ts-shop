export interface IProductModel {
  product_id: string;
  product_name: string;
  product_brief: string;
  product_price: string;
  product_org_price: string;
  img_url: string;
}
export interface INavsResponse {
  id: string;
  name: string;
}

export interface IProductResponse {
  list: IProductModel[]
}
