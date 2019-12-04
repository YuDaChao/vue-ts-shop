<template>
  <div class="layout-wrapper">
    <van-tabbar v-model="active" active-color="#ff6700" inactive-color="#999">
      <van-tabbar-item
        v-for="tab in tabList"
        :key="tab.name"
        :to="'/' + tab.name"
        replace
      >
        <span>{{ tab.title }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? tab.active : tab.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
    <v-top />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import { ITabItem } from "./types";

@Component
export default class Layout extends Vue {
  private active: number = 0;

  private tabList: ITabItem[] = [
    {
      title: "首页",
      name: "home",
      active: require(`@/assets/images/tabs/home_active.png`),
      inactive: require(`@/assets/images/tabs/home.png`)
    },
    {
      title: "分类",
      name: "category",
      active: require(`@/assets/images/tabs/category_active.png`),
      inactive: require(`@/assets/images/tabs/category.png`)
    },
    {
      title: "购物车",
      name: "cart",
      active: require(`@/assets/images/tabs/cart_active.png`),
      inactive: require(`@/assets/images/tabs/cart.png`)
    },
    {
      title: "我的",
      name: "user",
      active: require(`@/assets/images/tabs/user_active.png`),
      inactive: require(`@/assets/images/tabs/user.png`)
    }
  ];

  private mounted() {
    const { name = "home" } = this.$route;
    this.handleSelectCurrentTab(name);
  }

  private handleSelectCurrentTab(pathname: string): void {
    const pathnameArr: string[] = ["home", "category", "cart", "user"];
    const index: number = pathnameArr.indexOf(pathname);
    this.active = index > -1 ? index : 0;
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  box-shadow: -4px 0 10px rgba(0,0,0,0.2);
  z-index: 101 !important;
}
</style>
