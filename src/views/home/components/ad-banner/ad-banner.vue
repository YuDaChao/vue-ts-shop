<template>
  <div class="ad-banner">
    <div class="ad-banner--top">
      <a class="ad-banner--a" href="#" alt="">
        <img class="left-img" src="../../images/ad/ad_01.jpg" />
      </a>
      <div class="ad-banner--top--right">
        <a class="ad-banner--a" href="#" alt="">
          <img class="right-img" src="../../images/ad/ad_02.jpg" />
        </a>
        <a class="ad-banner--a" href="#" alt="">
          <img class="right-img" src="../../images/ad/ad_03.jpg" />
        </a>
      </div>
    </div>
    <v-divider />
    <div class="ad-banner-middle">
      <a class="ad-banner--a" href="#" alt="">
        <img class="middle-img" src="../../images/ad/ad_04.jpg" />
      </a>
    </div>
    <v-divider />
    <div class="ad-banner-bottom">
      <a class="ad-banner--a" href="#" alt="">
        <img class="bottom-img" src="../../images/ad/ad_05.jpg" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VDivider from "@/components/divider/v-divider.vue";

@Component({
  components: {
    VDivider
  }
})
export default class AdBanner extends Vue {}
</script>

<style lang="scss" scoped>
.ad-banner {
  .ad-banner--top {
    display: flex;
    width: 100%;
    height: 264px;
    .ad-banner--top--right {
      font-size: 0;
    }
    .left-img {
      width: 186px;
      height: 100%;
    }
    .right-img {
      width: 189px;
      height: 132px;
    }
  }
  .ad-banner-middle {
    width: 100%;
    height: 145px;
    .middle-img {
      width: 100%;
      height: 100%;
    }
  }
  .ad-banner-bottom {
    width: 100%;
    height: 230px;
    .bottom-img {
      width: 100%;
      height: 100%;
    }
  }
  .ad-banner--a {
    display: inline-block;
    width: inherit;
    height: inherit;
  }
}
</style>
