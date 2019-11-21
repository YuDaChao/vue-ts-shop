<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
// 禁止手机端扩大和缩小手势
window.onload = () => {
  document.addEventListener("touchstart", (event: any) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", (event: any) => {
    event.preventDefault();
  });
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>
