<template>
  <div>
    <div class="shop-header" v-if="shop !== null">
      <img :src="shop.logo" alt="" class="shop-logo" />
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-content" v-if="shop !== null">
      <div class="shop-content-left">
        <div class="shop-content-left-item">
          <span>{{ getSells + "万" }}</span>
          <span id="word"> 总销量 </span>
        </div>
        <div class="shop-content-left-item">
          <span>{{ shop.goodsCount }}</span>
          <span id="word"> 全部宝贝 </span>
        </div>
      </div>
      <div class="shop-content-right">
        <div
          class="shop-content-right-item"
          v-for="(item, index) in shop.score"
          :key="index"
        >
          <span id="word">{{ item.name }}</span>
          <span
            id="word"
            :class="{ red: item.isBetter, green: !item.isBetter }"
            >{{ item.score }}</span
          >
          <span
            id="word"
            :class="{
              red: item.isBetter,
              green: !item.isBetter,
              bgdred: item.isBetter,
              bgdgreen: !item.isBetter,
            }"
            >{{ getIsBetter(item.isBetter) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import math from "math";
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
    },
  },
  computed: {
    getSells() {
      console.log(this.shop);
      return math.round((this.shop.sells * 1.0) / 10000, 2);
    },
  },
  methods: {
    getIsBetter(isbetter) {
      if (isbetter) {
        return "高";
      } else {
        return "低";
      }
    },
  },
};
</script>
<style scoped>
.shop-header {
  display: flex;
  /* justify-content: left; */
  align-items: center;
}
#word {
  font-size: 12px;
  font-weight: normal;
}
.red {
  color: red;
}
.green {
  color: green;
}
.bgdred {
  background-color: red;
  color: white;
}
.bgdgreen {
  background-color: green;
  color: white;
}
.shop-logo {
  height: 40px;
  border-radius: 30px;
  border: solid 2px gray;
  margin: 0 10px;
}
.shop-content {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}
.shop-content-left {
  display: flex;
  flex: 1;
  justify-content: space-around;
  border-right: solid 1px gray;
}
.shop-content-left-item {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
  align-items: center;
}
.shop-content-right {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.shop-content-right-item {
  display: flex;
  margin-top: 8px;
  margin-left: 40px;
  justify-content: space-between;
}
</style>