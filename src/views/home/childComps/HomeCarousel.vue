<template>
  <div>
    <el-carousel indicator-position="outside" height="200px">
      <el-carousel-item v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
          <img :src="item.image" alt="" class="imgs" @load="ImgLoad" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return { items: [], isLoad: false };
  },
  props: {
    banners: {
      type: Array,
    },
  },
  watch: {
    banners: function (newval, oldval) {
      this.items = newval;
      this.items.forEach((element) => {
        console.log(element.link);
      });
    },
  },
  methods: {
    ImgLoad() {
      if (!this.isLoad) {
        this.$emit("carouselImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgs {
  height: 200px;
  width: 100%;
}
</style>

