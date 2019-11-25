<template>
  <div class="home">
    <div class="home-header">
      <v-search>
        <img slot="left" class="home-left-icon" src="./images/mi.png" >
        <i slot="right" class="home-right-icon" />
      </v-search>
      <v-nav @on-expended="showOverlay = !showOverlay" />
    </div>
    <div class="home-body">
      <!-- 轮播图 -->
      <v-swipe :images="images" height="187px" indicator-color="#fff" />
      <!-- 菜单导航 -->
      <nav-cells :cells="navCells" />
      <!-- 分割线 -->
      <v-divider />
      <!-- 广告展示区域 -->
      <ad-banner />
      <!-- 商品列表 -->
      <goods-list />
    </div>
    <van-overlay :show="showOverlay" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VSearch from "@/components/search/v-search.vue";
import VNav from "@/components/nav/v-nav.vue";
import VSwipe from "@/components/swipe/v-swipe.vue";
import VDivider from "@/components/divider/v-divider.vue";
import NavCells from "./components/nav-cells/nav-cells.vue";
import AdBanner from "./components/ad-banner/ad-banner.vue";
import GoodsList from "./components/goods/goods.vue";

@Component({
  components: {
    VSearch,
    VNav,
    VSwipe,
    NavCells,
    VDivider,
    AdBanner,
    GoodsList
  }
})
export default class Home extends Vue {

  private showOverlay: boolean = false;

  private images: string[] = [
    require("./images/banner_01.jpg"),
    require("./images/banner_02.jpg"),
    require("./images/banner_03.jpg")
  ];

  private navCells: string[] = [
    require("./images/nav/nav_01.png"),
    require("./images/nav/nav_02.jpg"),
    require("./images/nav/nav_03.jpg"),
    require("./images/nav/nav_04.jpg"),
    require("./images/nav/nav_05.jpg"),
    require("./images/nav/nav_06.png"),
    require("./images/nav/nav_07.png"),
    require("./images/nav/nav_08.png"),
    require("./images/nav/nav_09.png"),
    require("./images/nav/nav_10.png")
  ];
}
</script>

<style lang="scss" scoped>
.home {
  .home-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #f2f2f2;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  }
  .home-left-icon {
    width: 26px;
    height: 16px;
  }
  .home-right-icon {
    width: 34px;
    height: 34px;
    background-image: url("./images/user.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 20px 20px
  }
  .home-body {
    position: absolute;
    top: 82px;
    left: 0;
    right: 0;
    padding-bottom: 50px;
    background-color: #fff;
  }
}
</style>
