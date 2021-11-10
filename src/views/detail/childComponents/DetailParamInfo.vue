<template>
  <div v-if="Object.keys(paramInfo).length !== 0">
    <div class="info-header">尺码说明</div>
    <table
      class="info-size"
      v-for="(item, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indexr) in item" :key="indexr">
        <td v-for="(td, indexd) in tr" :key="indexd">
          {{ td }}
        </td>
      </tr>
    </table>
    <div class="info-header">产品参数</div>
    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td>
          {{ item.key }}
        </td>
        <td>
          {{ item.value }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.info-size {
  border-collapse: collapse;
  width: 100%;
}
.info-size td,
.info-size tr {
  border: 1px solid black;
  padding: 4px;
}
.info-param {
  border-collapse: collapse;
  width: 100%;
}
.info-param td,
.info-param tr {
  border: 1px solid black;
  padding: 4px;
}
.info-header {
  display: flex;
  justify-content: left;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  margin: 10px 0;
  overflow: hidden;
}
</style>