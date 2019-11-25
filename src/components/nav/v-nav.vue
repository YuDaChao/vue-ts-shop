<template>
  <div class="v-nav">
    <div v-show="!expended" class="v-nav-wrapper" ref="navScroll">
      <div class="v-nav-content">
        <v-nav-item
          v-for="(nav, index) in navList"
          ref="navItem"
          :key="index"
          :text="nav"
          :isActive="nav === selectedNavItem"
          class="v-nav-item"
          @click.native="handleChangeNavItem(nav, index)"
        />
      </div>
    </div>
    <div v-show="expended" class="v-nav-wrapper-layer">
      <div class="v-nav-wrapper-layer--title">全部</div>
      <div class="v-nav-wrapper-layer--content">
        <v-nav-button
          v-for="(nav, index) in navList"
          :key="index"
          :isActive="nav === selectedNavItem"
          :class="(index + 1) % 4 !== 0 ? 'm-right' : ''"
          @click.native="handleChangeNavItem(nav, index)"
        >
          {{ nav }}
        </v-nav-button>
      </div>
    </div>
    <div
      class="v-nav-extra"
      :class="expended ? 'unfold' : ''"
      @click="handleClickNavExtra"
    >
      <i class="v-nav-extra-icon"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BScroll from "@better-scroll/core";

import VNavItem from "./v-nav-item.vue";
import VNavButton from "./v-nav-button.vue";

@Component({
  components: {
    VNavItem,
    VNavButton
  }
})
export default class VNav extends Vue {
  private bScroll: any = null;
  private expended: boolean = false;

  private selectedNavItem: string = "推荐";
  private navList: string[] = [
    "推荐",
    "手机",
    "智能",
    "电视",
    "笔记本",
    "家电",
    "生活周边"
  ];

  private mounted() {
    this.$nextTick(() => {
      this.initScroll();
    })
  }

  private beforeDestroy() {
    if (this.bScroll) {
      this.bScroll.destroy()
    }
  }

  // 初始化betterScroll
  private initScroll(): void {
    // @ts-ignore
    this.bScroll = new BScroll(this.$refs.navScroll, {
      scrollX: true,
      probeType: 3
    });
  }

  // 处理分类菜单点击
  private handleChangeNavItem(nav: string, index: number): void {
    this.selectedNavItem = nav;
    if (this.bScroll && !this.expended) {
      // 指定滚动的位置
      this.bScroll.scrollToElement((this.$refs.navItem as any)[index].$el)
    }
  }

  private handleClickNavExtra(): void {
    this.expended = !this.expended;
    this.$emit("on-expended", this.expended)
  }
}
</script>

<style lang="scss" scoped>
.v-nav {
  position: relative;
  .v-nav-wrapper {
    margin-right: 50px;
    background-color: #f2f2f2;
    white-space: nowrap;
    overflow: hidden;
    .v-nav-content {
      display: inline-block;
      height: 30px;
      line-height: 30px;
    }
  }
  .v-nav-wrapper-layer {
    background-color: #f2f2f2;
    padding: 0 12px;
    line-height: 30px;
    font-size: 14px;
    color: #747474;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    .layer-enter-active,
    .layer-leave-active {
      transition: max-height 0.3s ease-in-out;
    }
    .layer-enter,
    .layer-leave-to {
      max-height: 0;
    }
    .v-nav-wrapper-layer--content {
      margin-top: 12px;
      .m-right {
        margin-right: 8px;
      }
    }
  }
  .v-nav-extra {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 30px;
    background-color: #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
    .v-nav-extra-icon {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-image: url("./images/arrow-down.png");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 24px 24px;
      transition: transform 0.2s linear;
    }
    &.unfold {
      .v-nav-extra-icon {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
