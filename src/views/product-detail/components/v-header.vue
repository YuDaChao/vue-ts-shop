<template>
  <div class="v-header">
    <div class="v-header--content">
      <div class="v-header--left v-header-img--wrapper" @click="handleClickBack">
        <img class="img" src="../images/arrow-left.png" >
      </div>
      <div class="v-header--right v-header-img--wrapper">
        <img class="img" src="../images/share.png" >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VHeader extends Vue {
  private handleClickBack() {
    this.$emit("on-back")
  }
}
</script>

<style lang="scss" scoped>
.v-header {
  position: fixed;
  left: 0;
  right: 0;
  height: 50px;
  background-color: transparent;
  z-index: 10;
  .v-header--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .v-header-img--wrapper {
      margin: 0 12px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.6)
    }
    .img {
      width: 18px;
      height: 18px;
      margin: 6px;
    }
  }
}
</style>

