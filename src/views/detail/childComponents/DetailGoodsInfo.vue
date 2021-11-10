<template>
  <div v-if="detailGoodsInfo !== null">
    <div class="info-desc">
      <div class="info-desc-header">产品描述</div>
      {{ detailGoodsInfo.desc }}
    </div>
    <div class="info-key">
      {{ detailGoodsInfo.detailImage[0].key }}
    </div>
    <div>
      <div class="info-list">
        <img
          v-for="(item, index) in detailGoodsInfo.detailImage[0].list"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailGoodsInfo: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.info-desc-header {
  display: flex;
  justify-content: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin: 10px 0;
  overflow: hidden;
}
.info-key {
  display: flex;
  justify-content: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin: 10px 0;
  overflow: hidden;
}
</style>