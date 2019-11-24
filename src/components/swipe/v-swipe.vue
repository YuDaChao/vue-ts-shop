<template>
  <div class="v-swipe">
    <van-swipe :autoplay="3000" v-bind="$attrs">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img class="image" v-lazy="image">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VSwipe extends Vue {
  @Prop({ default: () => ([]), required: true, type: Array })
  private images!: string[]
}
</script>

<style lang="scss" scoped>
.v-swipe {
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>

