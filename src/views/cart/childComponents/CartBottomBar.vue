<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="left">
        <el-checkbox v-bind:value="SelectAll" @click.native="changeALL($event)"
          >全选</el-checkbox
        >
      </div>
      <div slot="right" class="right">
        <span>合计:{{ sumPrice }}</span>
        <el-button round class="elbutton"> 结算</el-button>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: { NavBar },
  name: "CartBottomBar",
  data() {
    return {
      isSelectAll: false,
    };
  },
  computed: {
    ...mapGetters(["cartLength", "cartList", "cartCount"]),
    sumPrice() {
      let list = this.cartList;
      let total = 0;
      list.forEach((element) => {
        if (element.isChecked) {
          let count = element.count;
          let price = element.price.substring(1);
          total += count * price;
        }
      });
      return Math.ceil(total);
    },
    SelectALL() {
      return !this.cartList.find((item) => !item.isChecked === true);
    },
  },
  watch: {
    isSelectAll(newv, oldv) {
      this.cartList.forEach((element) => {
        element.isChecked = this.isSelectAll;
      });
      //改变CartItem中的checkbox数据状态
      this.$bus.$emit("changeStatus", this.isSelectAll);
    },
  },
  methods: {
    //不知道为什么，没有商品的时候，会执行一次selectAll，有商品的时候会执行2次
    changeAll(e, data) {
      //el-checkbox点击触发两次事件处理方法
      //因为根元素是label，click事件绑定到了label上。
      // 因为点击label的时候，事件冒泡一次，同时会触发关联的input的change事件，导致事再次触发事件
      if (e.target.tagName === "INPUT") {
        return;
      }
      if (this.SelectALL) {
        this.cartList.forEach((element) => {
          element.isChecked = false;
        });
        //改变CartItem中的checkbox数据状态
        this.$bus.$emit("changeStatus", false);
      } else {
        this.cartList.forEach((element) => {
          element.isChecked = true;
        });
        //改变CartItem中的checkbox数据状态
        this.$bus.$emit("changeStatus", true);
      }
    },
    //判断是否全部商品都被选中
  },
};
</script>
<style scoped>
home {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  width: 180px;
  justify-content: space-around;
  align-items: center;
}
.elbutton {
  height: 35px;
}
</style>