<template>
  <div
    class="v-divider"
    :style="{ height: height, 'background-color': bgColor }"
  ></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VDivider extends Vue {
  @Prop({ default: "", type: String })
  private height!: string;
  @Prop({ default: "", type: String })
  private bgColor!: string;
}
</script>

<style lang="scss" scoped>
.v-divider {
  width: 100%;
  height: 8px;
  background-color: rgb(245, 245, 245);
}
</style>
