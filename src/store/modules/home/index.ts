import { Module } from "vuex";

import { IHomeState } from "./types";

// api
import { queryNavs, queryProductList } from "@/api/home";

// types
import { INavsResponse, IProductResponse } from "@/api/home/types";

const namespaced: boolean = true;

const home: Module<IHomeState, any> = {
  namespaced,
  state: {
    navList: [],
    product: {
      list: []
    }
  },
  getters: {},
  mutations: {
    setNavList(state: IHomeState, payload: INavsResponse[]) {
      state.navList = payload;
    },
    setProduct(state: IHomeState, payload: IProductResponse) {
      state.product = payload;
    }
  },
  actions: {
    async getNavList({ commit }) {
      const { data } = await queryNavs();
      commit("setNavList", data || []);
    },
    async getProduct({ commit }) {
      const { data } = await queryProductList();
      commit("setProduct", data);
    }
  }
};

export default home;
