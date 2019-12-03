<template>
  <div class="blank">
    <router-view></router-view>
    <v-top />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Blank extends Vue {}
</script>

