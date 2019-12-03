<template>
  <div class="product-detail">
    <v-header @on-back="handleBack" />
    <v-swipe :images="images" height="412px" indicator-color="#fff" />
    <!-- 商品基本信息 -->
    <div class="product-detail--info">
      <div class="product-info--product-name">Redmi 7</div>
      <div class="product-info--product-desc">
        4000mAh大电量 / 骁龙632八核处理器 / 6.26"水滴全面屏，德国莱茵 TÜV
        认证护眼屏 / 18个月超长质保，康宁第五代大猩猩玻璃盖板 /
        支持大字体、大音量模式，收音机、红外遥控功能 /
        1200万AI双摄，1.25μm大像素相机
      </div>
      <div class="product-info--product-price">
        <div class="price current-price">899</div>
        <div class="price origin-price">999</div>
      </div>
    </div>

    <!-- 基本参数 -->
    <class-parameters />

    <!-- 选择版本 -->
    <choose-version />

    <div class="goods-action-wrapper">
      <van-goods-action>
        <van-goods-action-icon icon="wap-home-o" text="首页" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import VSwipe from "@/components/swipe/v-swipe.vue";
import VHeader from "./components/v-header.vue";
import ClassParameters from "./components/class-parameters.vue";
import ChooseVersion from "./components/choose-version.vue";

@Component({
  components: {
    VHeader,
    VSwipe,
    ClassParameters,
    ChooseVersion
  }
})
export default class ProductDetail extends Vue {
  private images: string[] = [
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22f848793321e402255af4eba8037da5.jpg",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5d7a0341d88c0edebc8269b301161e9.jpg",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/36df28faaada581e8cdd530eeef817b9.jpg",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8742a9e44d82ef8c8a60483c4e4bacbd.jpg"
  ];

  private handleBack() {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
  padding-bottom: 96px;
  .goods-action-wrapper {
    .van-goods-action {
      right: 8px;
      bottom: 8px;
      left: 8px;
      border-radius: 8px;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
    }
    .van-goods-action-icon {
      background-color: transparent !important;
    }
  }
  .product-detail--info {
    .product-info--product-name {
      padding: 16px 16px 0;
      font-size: 20px;
      color: #3c3c3c;
      line-height: 1.5;
    }
    .product-info--product-desc {
      padding: 0 16px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      line-height: 1.5;
    }
    .product-info--product-price {
      padding: 16px;
      .price {
        display: inline-block;
        font-size: 0px;
      }
      .current-price {
        font-size: 24px;
        color: #ff6700;
        &::before {
          content: "\A5";
          font-size: 18px;
        }
      }

      .origin-price {
        margin-left: 12px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.54);
        &::before {
          content: "\A5";
          font-size: 14px;
          color: rgba(0, 0, 0, 0.54);
        }
      }
    }
  }
}
</style>
