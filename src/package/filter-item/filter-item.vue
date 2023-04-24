<template>
  <div>
    <div class="filter-body">
      <div class="filter-wrap">
        <slot>
          <div class="filter-title" name="title">{{ className }}</div>
        </slot>
        <div>
          <div
            v-for="(item, index) in tagList"
            :key="`taglist-${index}`"
            @click="onTag(item)"
            class="filter-item filter-item-wrap"
            :style="tagsChecked.includes(item.key) ? checkedStyleParams : ''"
          >
            <div
              class="icon-wrap"
              :class="iconWrapPostion"
              :style="iconTriangleStyle"
              v-if="tagsChecked.includes(item.key)"
            >
              <slot name="">
                <svg
                  name="icon"
                  class="icon svg-icon"
                  :class="iconPostion"
                  aria-hidden="true"
                  :style="`font-size:${iconStyleDefault.size}px;color:${iconStyleDefault.color};float:${iconStyleDefault.float};transform: rotate(${iconStyleDefault.angle});`"
                >
                  <use :xlink:href="iconStyleDefault.name"></use>
                </svg>
              </slot>
            </div>
            <div class="">
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
    iconStyle: {
      type: Object,
      default: null,
    },
    checkStyle: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tagsChecked: [],
    }
  },
  computed: {
    iconStyleDefault() {
      const position = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(
        this.iconStyle.position
      )
        ? this.iconStyle.position
        : 'bottomLeft'
      return {
        color: this.iconStyle.color || '#fff',
        size: this.iconStyle.size || 16,
        name: this.iconStyle.name || '',
        float: this.iconStyle.float || '',
        angle: this.iconStyle.angle || '0deg',
        position: position,
        markColor: this.iconStyle.markColor || '#67C23A',
      }
    },
    iconPostion() {
      return `icon--${this.iconStyleDefault.position}`
    },
    iconWrapPostion() {
      return `icon-wrap--${this.iconStyleDefault.position}`
    },
    iconTriangleStyle() {
      let styleParams = {
        top: 'transparent',
        bottom: 'transparent',
        left: 'transparent',
        right: 'transparent',
      }
      switch (this.iconStyleDefault.position) {
        case 'topLeft':
          styleParams.top = this.iconStyleDefault.markColor
          styleParams.left = this.iconStyleDefault.markColor
          break
        case 'topRight':
          styleParams.top = this.iconStyleDefault.markColor
          styleParams.right = this.iconStyleDefault.markColor
          break
        case 'bottomLeft':
          styleParams.bottom = this.iconStyleDefault.markColor
          styleParams.left = this.iconStyleDefault.markColor
          break
        case 'bottomRight':
          styleParams.right = this.iconStyleDefault.markColor
          styleParams.bottom = this.iconStyleDefault.markColor
          break
      }
      return `
            border-top: 10px solid ${styleParams.top || 'transparent'};
            border-bottom: 10px solid ${styleParams.bottom || 'transparent'};
            border-left: 10px solid ${styleParams.left || 'transparent'};
            border-right: 10px solid ${styleParams.right || 'transparent'};`
    },
    checkedStyleParams() {
      let styleParams = {
        border: '#cd9f54',
        backgroundColor: '#fff2de',
        color: '#cd9f54',
      }
      if (this.checkStyle) {
        styleParams.border = this.checkStyle.border || styleParams.border
        styleParams.backgroundColor = this.checkStyle.backgroundColor || styleParams.backgroundColor
        styleParams.color = this.checkStyle.color || styleParams.color
      }
      return `
        border:1px solid ${styleParams.border};
        background-color: ${styleParams.backgroundColor};
        color: ${styleParams.color};`
    },
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
  text-align: left;
}
.filter-title {
  font-weight: bold;
  padding-bottom: 6px;
}
.info-icon {
  width: 16px;
  height: 16px;
  margin-left: 6px;
}
.filter-wrap {
  display: inline-block;
}
.filter-wrap:not(:first-child) {
  padding-top: 26px;
}
.filter-wrap:first-child {
  padding-top: 10px;
}
.filter-item-wrap {
  position: relative;
  overflow: hidden;
  margin: 5px;
  float: left;
  border-radius: 5px;
  background-color: #f6f8fa;
  border: 1px solid #f6f8fa;
  color: rgba(51, 51, 51, 0.65);
}
.filter-item {
  padding: 5px 15px;
}
.filter-item--checked {
  border: 1px solid #cd9f54;
  background-color: #fff2de;
  color: #cd9f54;
}
/** 图标 */
.icon-wrap {
  position: absolute;
  z-index: 9;
  height: 0;
  width: 0;
}
.icon-wrap--topLeft {
  left: 0;
  top: 0;
}
.icon-wrap--topRight {
  right: 0;
  top: 0;
}
.icon-wrap--bottomLeft {
  left: 0;
  bottom: 0;
}
.icon-wrap--bottomRight {
  right: 0;
  bottom: 0;
}
.svg-icon {
  position: absolute;
}
.icon--topLeft {
  left: -12px;
  top: -11px;
}
.icon--topRight {
  right: -12px;
  top: -11px;
}
.icon--bottomLeft {
  left: -12px;
  bottom: -12px;
}
.icon--bottomRight {
  right: -12px;
  bottom: -11px;
}
.icon {
  width: 1em;
  height: 1em;
}
</style>
