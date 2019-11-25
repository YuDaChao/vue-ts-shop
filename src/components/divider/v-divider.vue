<template>
  <div class="v-divider"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VDivider extends Vue {}
</script>

<style lang="scss" scoped>
.v-divider {
  width: 100%;
  height: 8px;
  background-color: rgb(245, 245, 245);
}
</style>

