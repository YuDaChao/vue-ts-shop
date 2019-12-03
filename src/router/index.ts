import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";
import BlankLayout from "@/layout/blank.vue";

import ProductDetail from "@/views/product-detail/index.vue";


const Home = () => import("@/views/home/index.vue");
const Category = () => import("@/views/category/index.vue");
const Cart = () => import("@/views/cart/index.vue");
const User = () => import("@/views/user/index.vue");


Vue.use(Router);

export default new Router({
  scrollBehavior: () => {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/detail",
      name: "detail",
      component: BlankLayout,
      children: [{
        path: ":id",
        name: "productDetail",
        component: ProductDetail
      }]
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "category",
          name: "category",
          component: Category
        },
        {
          path: "cart",
          name: "cart",
          component: Cart
        },
        {
          path: "user",
          name: "user",
          component: User
        }
      ]
    }
  ]
});
