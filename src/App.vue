<template>
  <div id="app">
    <FilterItem
      className="运动项目"
      :defaultTags="[1, 2]"
      :radio="true"
      :iconStyle="{
        name: '#icon-dagou1',
        position: 'topRight',
        markColor: '#f3d19e',
      }"
      :tagList="tagListTest"
      :checkStyle="{ border: '#409EFF', backgroundColor: '#c6e2ff', color: '#409EFF' }"
    ></FilterItem>
    <FilterItem
      :defaultTags="[1]"
      :radio="true"
      :iconStyle="{ name: '#icon-dagou1', position: 'bottomRight' }"
    ></FilterItem>
  </div>
</template>

<script>
import FilterItem from '@/package/filter-item/filter-item.vue'
export default {
  name: 'App',
  data() {
    return {
      tagListTest: [
        { name: '跑步机', key: 1 },
        { name: '举重机', key: 2 },
        { name: '桌球', key: 3 },
        { name: '瑜伽', key: 4 },
      ],
    }
  },
  components: {
    FilterItem,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
