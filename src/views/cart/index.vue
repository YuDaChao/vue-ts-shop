<template>
  <div class="cart">
    <div class="cart-list">
      <cart-item v-for="i in 4" :key="i" />
    </div>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CartItem from "./components/cart-item.vue";

@Component({
  components: {
    CartItem
  }
})
export default class Cart extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.cart {
  width: 100%;
  height: 100vh;
  background-color: $bg--color;
  .van-submit-bar {
    bottom: 51px;
    padding-left: 10px;
    overflow: hidden;
  }
}
</style>
