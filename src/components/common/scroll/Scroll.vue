<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { debounce } from "common/utils";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "哈哈哈",
      isScollTimeOut: true,
      isPullingUpTimeOut: true,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      //   this.$emit("scroll", position);
      if (this.isScollTimeOut) {
        this.$emit("scroll", position);
        this.isScollTimeOut = false;
        setTimeout(() => {
          this.isScollTimeOut = true;
        }, 100);
      }
    });

    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      //   console.log("监听滚动到底部");
      //   this.$emit("pullingUp");

      if (this.isPullingUpTimeOut) {
        this.$emit("pullingUp");
        this.isPullingUpTimeOut = false;
        setTimeout(() => {
          this.isPullingUpTimeOut = true;
        }, 1000);
      }
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>
