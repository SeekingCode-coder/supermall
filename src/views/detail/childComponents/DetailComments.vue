<template>
  <div class="info-comment">
    <div class="header">
      <div>用户评价</div>
      <a href="#">更多</a>
    </div>
    <div class="content" v-if="detailcommentInfo !== null">
      <div class="content-header">
        <img :src="detailcommentInfo.list[0].user.avatar" alt="" />
        <p>{{ detailcommentInfo.list[0].user.uname }}</p>
      </div>
      <div class="content-content" v-if="detailcommentInfo !== null">
        <p>{{ detailcommentInfo.list[0].content }}</p>
      </div>
      <div class="content-footer">
        <span>{{ getdate(detailcommentInfo.list[0].created) }} </span>
        <span>{{ detailcommentInfo.list[0].style }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailComments",
  props: {
    detailcommentInfo: {
      type: Object,
    },
  },
  methods: {
    getdate: function (time) {
      //unix时间戳转化要乘以1000即可
      var timestamp = new Date(time * 1000);
      return (
        timestamp.toLocaleDateString().replace(/\//g, "-") +
        " " +
        timestamp.toTimeString().substr(0, 8)
      );
    },
  },
};
</script>
<style scoped>
.info-comment {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.header {
  display: flex;
  display: flex;
  width: 90%;
  justify-content: space-between;
  border-bottom: 1px lightgray solid;
  padding: 15px 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  width: 100%;
}
.content-header {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.content-header img {
  height: 40px;
  border-radius: 30px;
  border: solid 2px transparent;
  margin: 0 10px;
}
.content-content {
  margin: 5px 17px;
  font-size: 14px;
}
.content-footer {
  margin: 10px 15px;
  font-size: 14px;
  color: lightgray;
}
</style>
