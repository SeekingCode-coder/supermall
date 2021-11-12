<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartNavBar",
  components: { NavBar },
  computed: {
    ...mapGetters(["cartLength", "cartList", "cartCount"]),
  },
  mounted() {
    console.log(this.cartList);
  },
};
</script>
<style scoped>
.home-nav {
  background: red;
}
</style>