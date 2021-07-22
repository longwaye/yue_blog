<!--
 * @Descripttion: 菜单导航
 * @Author: LongWeiYi
 * @Date: 2021-07-20 11:13:23
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 16:03:42
-->
<template>
  <div id="myNav" :class="['overlay', menuClassName]" :style="{ backgroundColor: backgroundColor }">
    <div class="overlay-content" :style="{ color: fontColor }">
      <router-link
        @click="menuClick('home')"
        to="/home"
        :class="['animate__animated', animateType === 'home' ? animateStyle : '']"
      >Home</router-link>
      <router-link
        @click="menuClick('section')"
        to="/section"
        :class="['animate__animated', animateType === 'section' ? animateStyle : '']"
      >Section</router-link>
      <router-link
        @click="menuClick('works')"
        to="/works"
        :class="['animate__animated', animateType === 'works' ? animateStyle : '']"
      >Works</router-link>
      <router-link
        @click="menuClick('test')"
        to="/test"
        :class="['animate__animated', animateType === 'test' ? animateStyle : '']"
      >Test</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: "Menu",
  props: {
    menu: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const menuClassName = ref(props.menu)
    const animateType = ref('')
    const animateStyle = ref('animate__fadeOutRight')

    const menuClick = (type: string) => {
      animateType.value = type
      setTimeout(() => {
        emit("resetBtn")
        animateType.value = ''
      }, 500)
    }

    watch(() => props.menu, (newValue) => {
      menuClassName.value = newValue
    })
    watch(() => props.backgroundColor, (newValue) => {
      console.log('backgroundColor', newValue)
    })
    // onBeforeRouteUpdate(() => {
    //   console.log('监听到变化')
    // })
    // watch(() => route.path, () => {
    //   console.log('监听到变化')
    // })
    return {
      menuClassName,
      menuClick,
      animateType,
      animateStyle,
    }
  }
})
</script>

<style scoped lang="less">
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: rgba(246, 118, 86, 0.98);
  // background-color: #eee;
  overflow-x: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
a {
  color: inherit;
}
.overlay a {
  padding: 0px;
  text-decoration: none;
  font-size: 22px;
  // color: #000;
  display: block;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  text-transform: uppercase;
  margin: 5px 0;
}

.overlay a:hover,
.overlay a.active {
  color: #ca2303;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.menu_width {
  width: 100%;
}
</style>