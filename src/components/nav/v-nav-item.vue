<template>
  <div class="v-nav-item">
    <span class="v-nav-text" :class="isActive ? 'active' : ''">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VNavItem extends Vue {
  @Prop({ default: "", required: true })
  private text!: string;
  @Prop({ default: false, required: false, type: Boolean })
  private isActive!: boolean;
}
</script>

<style lang="scss" scoped>
.v-nav-item {
  display: inline-block;
  padding: 0 12px;
  .v-nav-text {
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: rgb(116, 116, 116);
    &.active {
      color: rgb(237, 91, 0);
    }
    &.active::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background-color: rgb(237, 91, 0);
    }
  }
}
</style>
