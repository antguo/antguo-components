<template>
  <div id="app">
    <FilterItem :defaultTags="[1]" :radio="true"></FilterItem>
  </div>
</template>

<script>
import FilterItem from '@/package/filter-item/filter-item.vue'
export default {
  name: 'App',
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
