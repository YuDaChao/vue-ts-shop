<template>
  <span class="v-nav-button" :class="isActive ? 'active' : ''">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VNavButton extends Vue {
  @Prop({ default: false, required: false, type: Boolean })
  private isActive!: boolean;
}
</script>

<style lang="scss" scoped>
.v-nav-button {
  display: inline-block;
  width: 78px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 12px;
  &.active {
    background-color: #fde0d5;
    border-color: #ff6700;
    color: #ff6700;
  }
}
</style>
