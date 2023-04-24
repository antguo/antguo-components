import filterItem from './filter-item/filter-item.vue'
const coms = [filterItem]
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
}
export default install
