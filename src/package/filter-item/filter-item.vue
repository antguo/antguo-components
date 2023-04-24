<template>
  <div>
    <div class="filter-body">
      <div class="filter-wrap">
        <slot>
          <div class="filter-title" name="title">{{ className }}</div>
        </slot>
        <div>
          <div v-for="(item, index) in tagList" :key="`taglist-${index}`" @click="onTag(item)">
            <div
              class="filter-item"
              :class="tagsChecked.includes(item.key) ? 'filter-item--checked' : ''"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filterItem',
  props: {
    className: {
      type: String,
      default: '大类名称',
    },
    defaultTags: {
      type: Array,
      default: () => [],
    },
    tagList: {
      type: Array,
      default: () => [
        {
          name: '标签1',
          key: 1,
        },
        {
          name: '标签2',
          key: 2,
        },
      ],
    },
    radio: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tagsChecked: [],
    }
  },
  mounted() {
    // 赋值默认勾选的标签
    this.tagsChecked = this.defaultTags
  },
  methods: {
    onTag(item) {
      if (this.radio) {
        // 单选标签
        this.tagsChecked = []
        this.tagsChecked.push(item.key)
      } else {
        // 多选标签
        if (!this.tagsChecked.includes(item.key)) {
          this.tagsChecked.push(item.key)
        } else {
          this.tagsChecked = this.tagsChecked.filter(i => item.key != i)
        }
      }
    },
  },
}
</script>
<style scoped>
.filter-body {
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
}
.filter-title {
  font-weight: bold;
  padding-bottom: 6px;
  display: inline-block;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.info-icon {
  width: 16px;
  height: 16px;
  margin-left: 6px;
}
.filter-wrap:not(:first-child) {
  padding-top: 26px;
}
.filter-wrap:first-child {
  padding-top: 10px;
}
.filter-item,
.hot-filter-item {
  position: relative;
  float: left;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
}
.filter-item {
  background-color: #f6f8fa;
  border: 1px solid #f6f8fa;
  color: rgba(51, 51, 51, 0.65);
}
.filter-item--checked {
  border: 1px solid #cd9f54;
  background-color: #fff2de;
  color: #cd9f54;
}
</style>
