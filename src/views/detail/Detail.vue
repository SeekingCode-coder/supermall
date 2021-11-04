<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content" :probe-type="3" :pull-up-load="true">
      <detail-carousel :banners="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info />
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailCarousel from "./childComponents/DetailCarousel.vue";

import { getDetail, Goods, Shop } from "network/detail";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import Scroll from "../../common/scroll/Scroll.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
export default {
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
  },
  name: "Detail",
  data() {
    return { iid: "", topImages: [], goods: null, shop: null };
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