<template>
  <div class="goods-list">
    <goods-item v-for="i in 8" :key="i" :class="{ 'm-right': i % 2 !== 0 }" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import GoodsItem from "./goods-item.vue";

@Component({
  components: {
    GoodsItem
  }
})
export default class GoodsList extends Vue {}
</script>

<style lang="scss" scoped>
.goods-list {
  padding: 0 6px;
  .m-right {
    margin-right: 3px;
  }
}
</style>

