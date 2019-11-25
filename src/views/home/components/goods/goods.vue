<template>
  <div class="goods-list">
    <goods-item
      v-for="(item, index) in products"
      :key="item.product_id"
      :product="item"
      :class="{ 'm-right': index % 2 === 0 }"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import GoodsItem from "./goods-item.vue";

import { IProductModel } from "@/api/home/types";

@Component({
  components: {
    GoodsItem
  }
})
export default class GoodsList extends Vue {
  @Prop({ default: () => ([]) })
  private products!: IProductModel[];
}
</script>

<style lang="scss" scoped>
.goods-list {
  padding: 0 4px;
  .m-right {
    margin-right: 7px;
  }
}
</style>
