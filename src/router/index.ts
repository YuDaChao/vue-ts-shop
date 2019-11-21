import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout/index.vue";
import Home from "@/views/home/Home.vue";

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
        }
      ]
    }
  ]
});
