<template>
  <div class="class-parameters">
    <div class="class-parameters--wrapper" ref="classParameters">
      <div class="class-parameters--content">
        <div
          v-for="item in parameters"
          :key="item.name"
          class="class-parameters--item van-hairline--right"
        >
          <div class="class-parameters--item-icon center">
            <img class="icon" :src="item.icon" />
          </div>
          <div class="class-parameters--item-name van-ellipsis center">
            {{ item.name }}
          </div>
          <div class="class-parameters--item-value van-ellipsis center">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import BScroll from "@better-scroll/core";

@Component
export default class ClassParameters extends Vue {
  private parameters: any[] = [
    {
      bottom_title: "骁龙632八核",
      icon:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
      is_page_show: true,
      name: "CPU",
      top_title: "CPU",
      value: "骁龙632八核"
    },
    {
      bottom_title: "1200万+200万像素",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
      is_page_show: true,
      name: "后置摄像头",
      top_title: "双摄像头",
      value: "1200万+200万像素"
    },
    {
      bottom_title: "6.26英寸",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
      is_page_show: true,
      name: "屏幕尺寸",
      top_title: "超大屏",
      value: "6.26英寸"
    },
    {
      bottom_title: "1520×720",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
      is_page_show: true,
      name: "屏幕分辨率",
      top_title: "屏幕分辨率",
      value: "1520×720"
    },
    {
      bottom_title: "4GB",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
      is_page_show: true,
      name: "运行内存",
      top_title: "高速",
      value: "4GB"
    },
    {
      bottom_title: "64GB",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
      is_page_show: true,
      name: "存储容量",
      top_title: "存储容量",
      value: "64GB"
    },
    {
      bottom_title: "8.47mm",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png",
      is_page_show: true,
      name: "机身厚度",
      top_title: "普通厚度",
      value: "8.47mm"
    },
    {
      bottom_title: "4000mAh",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
      is_page_show: true,
      name: "电池容量",
      top_title: "超长待机",
      value: "4000mAh"
    },
    {
      bottom_title: "4G全网通",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
      is_page_show: true,
      name: "网络类型",
      top_title: "运营商网络",
      value: "4G全网通"
    },
    {
      bottom_title: "双卡双待",
      icon:
        "https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png",
      is_page_show: true,
      name: "网络模式",
      top_title: "网络模式",
      value: "双卡双待"
    }
  ];

  private bScroll: any = null;

  private mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  }

  private beforeDestroy() {
    if (this.bScroll) {
      this.bScroll.destroy();
    }
  }

  private initScroll() {
    if (this.$refs.classParameters) {
      // @ts-ignore
      this.bScroll = new BScroll(this.$refs.classParameters, {
        scrollX: true,
        probeType: 3
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.class-parameters {
  padding-bottom: 10px;
  .class-parameters--wrapper {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    .class-parameters--content {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      white-space: nowrap;
      .class-parameters--item {
        flex: 0 0 88px;
        width: 88px;
        padding: 0 4px;
        .class-parameters--item-icon > .icon {
          width: 20px;
          height: 20px;
        }
        .class-parameters--item-name {
          padding: 4px 0;
          font-size: 12px;
          color: #3c3c3c;
        }
        .class-parameters--item-value {
          font-size: 12px;
          color: #676767;
        }
      }
    }
  }
}
</style>
