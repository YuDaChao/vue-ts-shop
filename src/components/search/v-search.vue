<template>
  <div class="v-search flex-center--y">
    <div class="v-search-left flex-center">
      <slot name="left"></slot>
    </div>
    <div class="v-search-middle">
      <div class="v-search-title van-hairline--surround  flex-center--y">
        <i class="v-search-icon" />
        搜索商品名称
      </div>
    </div>
    <div class="v-search-right flex-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VSearch extends Vue {
}
</script>

<style lang="scss" scoped>
.v-search {
  height: 52px;
  background-color: #F5F5F9;
  .v-search-left {
    flex: 0 0 46px;
  }
  .v-search-right {
    flex: 0 0 52px;
  }
  .v-search-title {
    flex: 1;
    width: 282px;
    height: 34px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 2px;
    font-size: 14px;
    color: rgba(0,0,0,.3);
    border-color: #e5e5e5;
    .v-search-icon {
      width: 34px;
      height: 34px;
      background-image: url("./images/search.png");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 28px 28px;
    }
  }
}
</style>
