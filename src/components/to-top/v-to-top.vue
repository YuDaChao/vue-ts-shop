<template>
  <div class="v-to-top" v-if="show">
    <img class="img" src="./images/top.png" @click="goTop" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VToTop extends Vue {
  private scrollTop: number = 0;

  private get show(): boolean {
    return this.scrollTop > 400;
  }

  private mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }

  private beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll() {
    this.scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  }

  private goTop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
}
</script>

<style lang="scss" scoped>
.v-to-top {
  position: fixed;
  bottom: 86px;
  right: 16px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 999999;
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
