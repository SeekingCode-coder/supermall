<template>
  <div class="cart">
    <cart-nav-bar class="home-nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <cart-list class="cart-list" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartNavBar from "./childComponents/CartNavBar.vue";
import CartList from "./childComponents/CartList.vue";
export default {
  components: { Scroll, CartNavBar, CartList },
  name: "Cart",
  methods: {
    loadMore() {
      //刷新scrollheight
      this.$refs.scroll.refresh();
      this.$refs.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: center;
  background: lightgray;
}
.content {
  height: calc(100vh - 100px);
  overflow: hidden;
  margin-top: 50px;
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
.cart-list {
  position: relative;
}
</style>
