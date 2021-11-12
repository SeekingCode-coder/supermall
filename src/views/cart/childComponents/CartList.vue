<template>
  <div class="cartList">
    <cart-item v-for="(item, index) in cartList" :key="index" :good="item" />
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { CartItem },
  name: "CartList",
  computed: {
    ...mapGetters(["cartLength", "cartList", "cartCount"]),
  },
  mounted() {
    // console.log(this.cartList);
  },
};
</script>