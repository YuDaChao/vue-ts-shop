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
  Divider,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  CellGroup,
  Cell,
  Icon,
  Checkbox,
  Stepper,
  SwipeCell,
  SubmitBar
} from "vant";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import VToTop from "./components/to-top/v-to-top.vue";

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
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
Vue.use(CellGroup).use(Cell)
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Stepper);
Vue.use(SwipeCell);
Vue.use(SubmitBar);

Vue.component("v-top", VToTop)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
