import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";


const Home = () => import("@/views/home/index.vue");
const Category = () => import("@/views/category/index.vue");
const Cart = () => import("@/views/cart/index.vue");
const User = () => import("@/views/user/index.vue");

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
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
