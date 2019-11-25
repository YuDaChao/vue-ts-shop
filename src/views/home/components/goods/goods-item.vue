<template>
  <div class="goods-item">
    <div class="goods-item--img">
      <img class="img" :src="product.img_url" />
    </div>
    <div class="goods-item--info">
      <div class="goods-item--info-name van-ellipsis center">
        {{ product.product_name }}
      </div>
      <div class="goods-item--info-brief van-ellipsis center">
        {{ product.product_brief }}
      </div>
      <div class="goods-item--price center">
        <span>{{ product.product_price }}</span>
        <span class="unit">起</span>
        <span class="price old">
          <s>{{ product.product_org_price }}</s>
        </span>
      </div>
      <van-button
        class="goods-item--buy"
        type="primary"
        size="small"
        color="#ea625b"
        >立即购买</van-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IProductModel } from "@/api/home/types";

@Component
export default class GoodsItem extends Vue {
  @Prop({ default: () => ({}) })
  private product!: IProductModel;
}
</script>

<style lang="scss" scoped>
.goods-item {
  display: inline-block;
  width: 180px;
  .goods-item--img {
    width: 100%;
    height: 145px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-item--info {
    padding: 8px 12px 12px;
    text-align: center;
    .goods-item--info-name {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
    }
    .goods-item--info-brief {
      margin-top: 4px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.45);
    }
    .goods-item--price {
      margin-top: 4px;
      font-size: 14px;
      color: #ea625b;
      &::before {
        content: "\A5";
      }
      .unit {
        font-size: 12px;
        margin: 0 6px 0 4px;
      }
      .old {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.54);
        &::before {
          content: "\A5";
        }
      }
    }
    .goods-item--buy {
      margin-top: 6px;
    }
  }
}
</style>
