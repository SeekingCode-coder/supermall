<template>
  <div class="info-comment">
    <div class="header">
      <div>用户评价</div>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <div class="content-header"></div>
      <div class="content-content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailComment",
  props: {
    detailcommentInfo: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  width: 90%;
  border-bottom: 1px lightgray solid;
}
</style>
