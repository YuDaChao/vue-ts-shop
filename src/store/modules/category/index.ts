import { Module } from "vuex";

import { ICategoryState } from "./types";

// api
import { queryCategoryList } from "@/api/category";

// types
import {
  ICategoryResponse,
  ICategoryModel,
  ICategoryProductModel
} from "@/api/category/types";

const namespaced: boolean = true;

const home: Module<ICategoryState, any> = {
  namespaced,
  state: {
    category: {
      list: []
    }
  },
  getters: {
    navbarList(state: ICategoryState) {
      return state.category.list.map((item: ICategoryModel) => ({
        id: item.category_id,
        name: item.category_name
      }));
    },
    categoryProductList(state: ICategoryState) {
      const list: ICategoryProductModel[][] = [];
      state.category.list.forEach((item: ICategoryModel) => {
        list.push([...item.category_list]);
      });
      return list;
    }
  },
  mutations: {
    setCategory(state: ICategoryState, payload: ICategoryResponse) {
      state.category = payload;
    }
  },
  actions: {
    async getCategory({ commit }) {
      const { data } = await queryCategoryList();
      commit("setCategory", data);
    }
  }
};

export default home;
