<template>
  <div>
    <div class="info-title" v-if="goods !== null">
      <p>{{ goods.title }}</p>
    </div>
    <div class="info-price" v-if="goods !== null">
      <span class="new-price">{{ "￥" + goods.realPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div v-if="goods !== null" class="info-columns">
      <div
        class="info-column-item"
        v-for="(item, index) in goods.columns"
        :key="index"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="info-services" v-if="goods !== null">
      <div
        class="info-services-item"
        v-for="(item, index) in goods.services"
        :key="index"
      >
        <img :src="item.icon" alt="" height="13px" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.info-title {
  font-weight: bold;
  margin: 0 5px;
}
.info-columns {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
  padding-bottom: 5px;
  color: gray;
  font-size: 14px;
}
.info-price {
  margin: 10px 0;
}
.info-price .new-price {
  color: pink;
  font-size: 21px;
  font-weight: bold;
}
.old-price {
  text-decoration: line-through;
  color: gray;
  margin-left: 5px;
}
.info-services {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 20px 2px;
}
</style>