<template>
  <div>
    <div class="home van-hairline--bottom">user</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class User extends Vue {
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 37.5px;
  width: 100px;
  height: 100px;
}
</style>
