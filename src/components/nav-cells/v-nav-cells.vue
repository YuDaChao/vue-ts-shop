<template>
  <div class="v-nav-cells">
    <van-grid :column-num="column" :border="border" v-bind="$attrs">
      <van-grid-item v-for="(img, index) in cells.slice(0, column)" :key="index">
        <van-image :src="img" />
      </van-grid-item>
    </van-grid>
    <van-grid :column-num="column" :border="border" v-bind="$attrs">
      <van-grid-item v-for="(img, index) in cells.slice(column)" :key="index">
        <van-image :src="img" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VNavCells extends Vue {
  @Prop({ default: () => ([]), required: true, type: Array })
  private cells!: string[]
  @Prop({ default: 5, required: false, type: Number })
  private column!: number
  @Prop({ default: false, required: false, type: Boolean })
  private border!: boolean
}
</script>

<style lang="scss">
.v-nav-cells {
  .van-grid-item__content {
    padding: 0;
  }
}
</style>

