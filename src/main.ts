import Vue from "vue";
import FastClick from "fastclick";
// vant
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Image,
  Grid,
  GridItem,
  Overlay,
  Divider
} from "vant";

import App from "./App.vue";
import router from "./router";

// vant样式
import "vant/lib/index.css";
import "@/assets/styles/index.scss";

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
Vue.use(Lazyload);
Vue.use(Image);
Vue.use(Overlay);
Vue.use(Divider);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Grid).use(GridItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
