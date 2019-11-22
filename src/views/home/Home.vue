<template>
  <div>
    <div class="home">测试</div>
    <van-button type="primary">按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  font-size: 37.5px;
  width: 100px;
  height: 100px;
}
</style>
