<template>
  <div class="goods-item">
    <div class="goods-item--img">
      <img class="img" src="../../images/goods/goods_01.jpg" />
    </div>
    <div class="goods-item--info">
      <div class="goods-item--info-name van-ellipsis center">
        Redmi Note 8 Pro
      </div>
      <div class="goods-item--info-brief van-ellipsis center">
        6400万全场景四摄
      </div>
      <div class="goods-item--price center">
        <span>1299</span>
        <span class="unit">起</span>
        <span class="price old">
          <s>1399</s>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class GoodsItem extends Vue {}
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
    padding: 8px 12px;
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
  }
}
</style>
