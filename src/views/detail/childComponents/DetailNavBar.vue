<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" alt="" class="img" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="item-title"
          :class="{ active: index === currentIndex }"
        >
          <span @click="changeItem(index)">{{ item }}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import { getDetail } from "network/detail";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeItem(index) {
      this.$emit("change", index);
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
}
.item-title {
  flex: 1;
  font-size: 13px;
}
.active {
  color: red;
}
.back img {
  margin-top: 10px;
}
</style>