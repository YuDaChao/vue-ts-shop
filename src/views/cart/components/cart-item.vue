<template>
  <div class="cart-item--wrapper">
    <van-swipe-cell>
      <div class="cart-item">
        <div class="cart-item--check">
          <van-checkbox checked-color="#f56600" />
        </div>
        <div class="cart-item--content">
          <van-image
            lazy-load
            class="cart-item--img"
            src="https://tva1.sinaimg.cn/large/006y8mN6ly1g9aoiyp081j309k07st8o.jpg"
          />
          <div class="cart-item--info">
            <div class="cart-item--product-name van-multi-ellipsis--l2">
              Redmi 8 3GB+32GB 宝石蓝
            </div>
            <div class="cart-item--price">
              <span class="text">售价:</span>
              <span class="price">978.00</span>
            </div>
            <div class="cart-item--action">
              <div class="cart-item--step">
                <van-stepper input-width="36px" button-size="22px" />
              </div>
              <div class="cart-item--del"></div>
            </div>
          </div>
        </div>
      </div>
      <template slot="right">
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CartItem extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.cart-item--wrapper {
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 4px;
}
.cart-item {
  position: relative;
  padding: 6px 0;
  .cart-item--check {
    position: absolute;
    top: 50%;
    width: 20px;
    padding: 0 10px;
    transform: translate3d(0, -50%, 0);
  }
  .cart-item--content {
    display: flex;
    padding-left: 40px;
    .cart-item--img {
      width: 86px;
      height: 86px;
      border-radius: 4px;
    }
    .cart-item--info {
      padding: 10px 20px 10px 12px;
      .cart-item--product-name {
        margin-bottom: 4px;
        font-size: 14px;
        color: #666666;
      }
      .cart-item--price {
        margin-bottom: 4px;
        font-size: 0;
        color: #999999;
        .text {
          font-size: 12px;
          margin-right: 8px;
        }
        .price {
          font-size: 14px;
          color: $primary--color;
          &::before {
            content: "\A5";
            font-size: 12px;
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.cart-item--wrapper {
  .van-swipe-cell__right {
    height: 100%;
    .van-button {
      height: 100% !important;
    }
  }
}
</style>
