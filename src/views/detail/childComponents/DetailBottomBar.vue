<template>
  <div class="items">
    <div class="item-server">
      <span>客服</span>
    </div>
    <div class="item-store">
      <span>店铺</span>
    </div>
    <div class="item-collect">
      <span>收藏</span>
    </div>
    <div class="item-shoppingcart" @click="add">
      <div>加入购物车</div>
    </div>
    <div class="item-buy">
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    add() {
      this.$emit("buy");
    },
  },
};
</script>
<style scoped>
.items {
  display: flex;

  height: 50px;
  width: 100%;
  position: relative;
  background: wheat;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
}
.item-server {
  display: flex;
  justify-content: center;

  flex: 1;
}
.item-store {
  display: flex;
  justify-content: center;
  flex: 1;
}
.item-collect {
  display: flex;
  justify-content: center;
  flex: 1;
}
.item-shoppingcart {
  display: flex;
  justify-content: center;
  flex: 2;
}
.item-buy {
  display: flex;
  justify-content: center;
  flex: 1.2;
}
</style>