<template>
  <div class="home">
    <div class="home-header">
      <v-search>
        <img slot="left" class="home-left-icon" :src="leftIcon" >
        <i slot="right" class="home-right-icon" />
      </v-search>
      <v-nav />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import VSearch from "@/components/search/v-search.vue";
import VNav from "@/components/nav/v-nav.vue";

// @ts-ignore
const homeLeftIcon = require("./images/mi.png");

@Component({
  components: {
    VSearch,
    VNav
  }
})
export default class Home extends Vue {
  private leftIcon: string = homeLeftIcon;
}
</script>

<style lang="scss" scoped>
.home {
  .home-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #f2f2f2;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  }
  .home-left-icon {
    width: 26px;
    height: 16px;
  }
  .home-right-icon {
    width: 34px;
    height: 34px;
    background-image: url("./images/user.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 20px 20px
  }
}
</style>
