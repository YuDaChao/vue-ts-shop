export interface ICategoryProductItems {
  img_url: string
}

export interface ICategoryProductModel {
  view_type: string;
  body: {
    category_name: string;
    items: ICategoryProductItems[] | null
  }
}
export interface ICategoryModel {
  category_id: number;
  category_name: string;
  category_list: ICategoryProductModel[]
}

export interface ICategoryResponse {
  list: ICategoryModel[]
}
