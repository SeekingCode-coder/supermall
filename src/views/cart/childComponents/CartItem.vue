<template>
  <div class="content" v-if="good != null">
    <div class="good-Header">
      <div class="good-select-bottom">
        <el-checkbox class="checkbox">
          <span class="shopname">{{ good.shopName }}</span>
        </el-checkbox>
      </div>
    </div>
    <div>
      <el-checkbox class="good-content">
        <div class="good-content-right">
          <div class="good-img">
            <div class="good-img1">
              <img :src="good.img" alt="" />
            </div>
          </div>
          <div class="good-title">
            <div class="good-title-title">{{ good.title }}</div>
            <div class="good-title-price">
              {{ good.price }}
              <div class="good-title-goodsCount">
                <el-button-group>
                  <el-button
                    type="primary"
                    icon="el-icon-minus"
                    @click="minus"
                  ></el-button>
                  <el-button>{{ good.count }}</el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    @click="plus"
                  ></el-button>
                </el-button-group>
              </div>
            </div>
          </div>
        </div>
      </el-checkbox>
    </div>
    <!-- {{ good.img }}
    {{ good.title }}
    {{ good.desc }}{{ good.price }} {{ good.iid }} -->
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    good: {
      type: Object,
    },
  },
  methods: {
    minus() {
      this.$store.dispatch("deleteGood", this.good);
    },
    plus() {
      this.$store.dispatch("addGood", this.good);
    },
  },
};
</script>
<style scoped>
.content {
  height: 130px;
  width: 97vw;
  margin-bottom: 8px;
  background: white;
  overflow: hidden;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 4px;
}
.shopname {
  margin-left: 10px;
  word-wrap: break-word;
}
.good-content {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  width: 90vw;
}
.good-content-right {
  display: flex;
  justify-content: left;
}
.good-img {
  display: flex;
  flex: 1;
  /* height: 80px; */
  /* overflow: hidden; */
  /* border-radius: 10px; */
}
.good-img1 {
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
}
.good-img img {
  height: 140px;
}
.good-title {
  flex: 1;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-left: 10px;
  /* border: 1px solid black; */
}
.good-title .good-title-title {
  width: 230px;
  overflow: hidden;
  /* white-space: normal;
  word-break: break-all; */
  text-overflow: ellipsis;
}
.good-title .good-title-price {
  width: 230px;
  overflow: hidden;
  /* white-space: normal;
  word-break: break-all; */
  text-overflow: ellipsis;
}
.good-title-title {
  font-weight: bold;
  color: black;
}
.good-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding-right: 10px;
  color: red;
}
.good-title-goodsCount {
  padding-left: 10px;
}
/* checkbox的外观 */
.el-checkbox__inner {
  border-radius: 30 px;
}
.el-button-group .el-button {
  padding: 4px 9px;
}
</style>