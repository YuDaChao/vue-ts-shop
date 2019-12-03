<template>
  <div class="choose-version">
    <van-cell-group :border="false">
      <van-cell is-link>
        <template slot="title">
          <span class="term text">已选</span>
          <span class="value text">Redmi 7 4GB+64GB 梦幻蓝 x 1</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="term text">送至</span>
          <span class="value text mr">北京市 东城区</span>
          <span class="on text">有现货</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="text mr"><van-icon name="passed" color="#f56600" />小米自营</span>
          <span class="text mr"><van-icon name="passed" color="#f56600" />小米发货</span>
          <span class="text mr"><van-icon name="passed" color="#f56600" />7天无理由退货</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ChooseVersion extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.choose-version {
  margin: 10px 16px 0;
  .text {
    font-size: 12px;
  }
  .term {
    margin-right: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
  .value {
    color: rgba(0, 0, 0, 0.87);
  }
  .mr {
    margin-right: 6px;
  }
  .on {
    color: $primary--color;
  }
  .van-cell-group {
    background-color: $bg--color;
    border-radius: 8px;
    .van-cell {
      background-color: transparent;
    }
  }
  .van-icon-passed {
    vertical-align: middle;
  }
}
</style>
