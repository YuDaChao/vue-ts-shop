<template>
  <div class="category">
    <div v-if="!loading">
      <div class="category-header">
        <v-search class="category-header--search">
          <i slot="left" class="back-icon" />
          <i slot="right" class="search-icon"></i>
        </v-search>
      </div>
      <div class="category-wrapper">
        <!-- 左边导航区域 -->
        <div class="category-navbar" ref="navbarScroll">
          <div class="category-navbar--content">
            <div
              v-for="(item, index) in navbarList"
              :key="item.id"
              :class="{ current: index === current }"
              class="categroy-navbar--item van-hairline--bottom"
              ref="navbarItem"
              @click="handleNavbarItemClick(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- 右边商品区域 -->
        <div class="category-product--container" ref="productScroll">
          <div class="category-product--content">
            <div
              v-for="(categories, index) in categoryProductList"
              :key="index"
              class="category-product--item"
              ref="categoryProduct"
            >
              <div v-for="(item, i) in categories" :key="'category-' + i">
                <div
                  class="category-banner"
                  v-if="item.view_type === 'cells_auto_fill'"
                >
                  <img
                    class="category-banner--img"
                    :src="item.body.items[0].img_url"
                  />
                </div>
                <div
                  v-if="item.view_type === 'category_title'"
                  class="category-product-title"
                >
                  <van-divider>{{ item.body.category_name }}</van-divider>
                </div>
                <van-grid
                  v-if="item.view_type === 'category_group'"
                  :border="false"
                  :column-num="3"
                >
                  <van-grid-item
                    v-for="(product, pIndex) in item.body.items"
                    :key="product.product_name || pIndex"
                  >
                    <van-image
                      class="category-product--img"
                      :src="product.img_url"
                    />
                    <div class="category-product--name van-ellipsis">
                      {{ product.product_name }}
                    </div>
                  </van-grid-item>
                </van-grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-loading v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Debounce from "debounce-decorator";
import BScroll from "@better-scroll/core";
import VSearch from "@/components/search/v-search.vue";
import VLoading from "@/components/loading/v-loading.vue";
import {
  ICategoryResponse,
  ICategoryModel,
  ICategoryProductModel
} from "@/api/category/types";

interface ICategory {
  id: number;
  name: string;
}

const categoryModule = namespace("category");

@Component({
  components: {
    VSearch,
    VLoading
  }
})
export default class Category extends Vue {
  @categoryModule.State("category")
  private category!: ICategoryResponse;
  @categoryModule.Getter("navbarList")
  private navbarList!: ICategory;
  @categoryModule.Getter("categoryProductList")
  private categoryProductList!: ICategoryProductModel[];

  @categoryModule.Action("getCategory")
  private getCategory!: () => void;

  // 左侧分类
  private navbarScroll: any = null;
  // 右侧商品区域
  private contentScroll: any = null;
  // 当前分类索引
  private current: number = 0;

  private listHeight: number[] = [];

  private loading: boolean = true;

  private mounted() {
    this.getCategory();
  }

  private beforeDestroy() {
    if (this.navbarScroll) {
      this.navbarScroll.destroy();
      this.contentScroll.destroy();
    }
  }

  @Watch("navbarList")
  private handleCategoryListChange() {
    this.loading = false;
    this.$nextTick(() => {
      if (this.navbarScroll) {
        this.navbarScroll.refresh();
      } else {
        this.initNavbarScroll()
      }
      if (this.contentScroll) {
        this.contentScroll.refresh();
      } else {
        this.initContentScroll()
      }
      // 计算高度
      this.calculateHeight();
    });
  }

  // 初始化initNavbarScroll
  private initNavbarScroll(): void {
    if (this.$refs.navbarScroll) {
      // @ts-ignore
      this.navbarScroll = new BScroll(this.$refs.navbarScroll, {
        scrollY: true,
        click: true,
        probeType: 3
      });
    }
  }

  // 初始化initContentScroll
  private initContentScroll(): void {
    if (this.$refs.productScroll) {
      // @ts-ignore
      this.contentScroll = new BScroll(this.$refs.productScroll, {
        scrollY: true,
        click: true,
        probeType: 3
      });

      // 监听右侧滚动
      this.contentScroll.on("scroll", this.handleRightScroll.bind(this));
    }
  }

  // 点击左侧分类
  private handleNavbarItemClick(index: number): void {
    this.current = index;
    if (this.navbarScroll) {
      // 指定滚动的位置
      this.navbarScroll.scrollToElement((this.$refs.navbarItem as any)[index]);
    }
    if (this.contentScroll) {
      // 指定滚动的位置
      this.contentScroll.scrollToElement(
        (this.$refs.categoryProduct as any)[index]
      );
    }
  }

  // 计算右侧内容区域每一块的高度，并保存在数组中
  private calculateHeight() {
    const els = this.$refs.categoryProduct;
    if (els) {
      let height = 0;
      const listHeight = [0];
      Array.prototype.slice.call(els).forEach((el: Element) => {
        height += el.clientHeight;
        listHeight.push(height);
      });
      this.listHeight = listHeight;
    }
  }

  // 监听右侧滚动
  @Debounce(50)
  private handleRightScroll({ y }: { y: number }) {
    for (let i = 0; i < this.listHeight.length; i++) {
      const height1 = this.listHeight[i];
      const height2 = this.listHeight[i + 1];
      const absY = Math.abs(y);
      if (height2 && absY >= height1 && absY < height2) {
        this.current = i;
        if (this.contentScroll) {
          // 指定滚动的位置
          this.navbarScroll.scrollToElement((this.$refs.navbarItem as any)[i]);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";
.category {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .category-header {
    .category-header--search {
      background-color: #fff;
      .back-icon {
        width: 34px;
        height: 34px;
        background-image: url("./images/arrow-right.png");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
  }
  .category-navbar {
    position: absolute;
    display: inline-block;
    top: 52px;
    bottom: 50px;
    width: 80px;
    overflow: hidden;
    background-color: $bg--color;
    .category-navbar--content {
      .categroy-navbar--item {
        position: relative;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
        color: #3c3c3c;
        overflow: hidden;
        &::after {
          border-color: #fff;
        }
        &.current {
          color: $primary--color;
          background-color: #fff;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .category-product--container {
    position: absolute;
    display: inline-block;
    top: 52px;
    bottom: 50px;
    left: 90px;
    right: 10px;
    overflow: hidden;
    .category-banner--img {
      width: 100%;
      height: 104px;
    }
    .category-product--img {
      width: 52px;
      height: 52px;
    }
    .category-product--name {
      margin-top: 14px;
      width: 75px;
      font-size: 12px;
      text-align: center;
      color: rgba(0, 0, 0, 0.54);
    }
  }
}
</style>
