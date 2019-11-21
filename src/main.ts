import Vue from "vue";
import FastClick from "fastclick";
// vant
import {
  Button,
  Tabbar,
  TabbarItem
} from "vant";

import App from "./App.vue";
import router from "./router";

// rem
import "@/utils/rem";

import "vant/lib/index.css";
import "@/styles/normalize.scss";
import "@/styles/reset.scss";

if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}

Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
