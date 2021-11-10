<template>
  <div id="detail">
    <detail-nav-bar :currentIndex="navbarIndex" @change="changeItem" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <detail-carousel :banners="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" ref="shop" />
      <detail-goods-info :detailGoodsInfo="detailGoodsInfo" ref="goods" />
      <detail-param-info :paramInfo="itemParams" ref="param" />
      <detail-comments :detailcommentInfo="commentInfo" ref="comment" />
      <good-list :goods="recommend" ref="recommend" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailCarousel from "./childComponents/DetailCarousel.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComponents/DetailParamInfo.vue";
import DetailComments from "./childComponents/DetailComments.vue";
import GoodList from "components/content/goods/GoodsList";

import { getrecommend } from "network/detail";
export default {
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    GoodList,
  },
  name: "Detail",
  data() {
    return {
      iid: "",
      topImages: [],
      goods: null,
      shop: null,
      detailGoodsInfo: null,
      itemParams: {},
      commentInfo: null,
      navbarIndex: 0,
      recommend: null,
    };
  },
  created() {
    getDetail(this.$route.query.gooditem.iid).then((res) => {
      this.iid = res.iid;
      //获取轮播图
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      //获取商家信息
      this.shop = new Shop(res.result.shopInfo);
      //获取商品详细信息
      this.detailGoodsInfo = res.result.detailInfo;
      //获取尺码信息
      this.itemParams = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      //获取商品评论信息
      this.commentInfo = res.result.rate;
      console.log(res.result);
    });
  },
  methods: {
    loadMore() {
      //刷新scrollheight
      this.$refs.scroll.refresh();
      this.$refs.scroll.finishPullUp();
    },
    changeItem(data) {
      this.$refs.scroll.refresh();
      switch (data) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0);
          this.navbarIndex = 0;
          break;
        case 1:
          //第一次点击的时候会往下走一点点距离，还没解决bug
          this.$refs.scroll.scrollTo(0, -this.$refs.param.$el.offsetTop);
          this.navbarIndex = 1;
          break;
        case 2:
          this.$refs.scroll.scrollTo(0, -this.$refs.comment.$el.offsetTop);
          this.navbarIndex = 2;
          break;
        case 3:
          this.$refs.scroll.scrollTo(0, -this.$refs.recommend.$el.offsetTop);
          this.navbarIndex = 3;
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    getrecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>