<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
      v-show="isTabControlFixed"
      :curIndex="getTabControlIndex"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <HomeCarousel :banners="banners" @carouselImgLoad="carouselImgLoad" />
      <!-- <home-swiper :banners="banners" /> -->
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
        :curIndex="getTabControlIndex"
      />
      <good-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import HomeCarousel from "./childComps/HomeCarousel.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    HomeCarousel,
    // HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControl_offsetTop: 0,
      isTabControlFixed: false,
      savePositionY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    getTabControlIndex() {
      switch (this.currentType) {
        case "pop":
          return 0;
        case "new":
          return 1;
        case "sell":
          return 2;
      }
      return 0;
    },
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      //设置tabControl的固定位置
      this.isTabControlFixed = -position.y > this.tabControl_offsetTop;
      this.savePositionY = -position.y;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
      //   getHomeGoods(type, page).then((res) => {
      //     this.goods[type].list.push(...res.data.list);
      //     this.goods[type].page += 1;
      //     this.$refs.scroll.finishPullUp();
      //   });
    },
    carouselImgLoad() {
      //獲取tabControl的offset，通過$el可以獲取真實組件
      this.tabControl_offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
  mounted() {
    //防止抖动
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  watch: {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.savePositionY, 0);
  },
  deactivated() {
    this.savePositionY = this.$refs.scroll.y;
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* 下面这两行代码会阻止电子maintarbar */
  height: 90vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  height: calc(100% - 30px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
