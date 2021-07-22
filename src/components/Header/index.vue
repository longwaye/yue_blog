<!--
 * @Descripttion: Header
 * @Author: LongWeiYi
 * @Date: 2021-07-15 17:59:43
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 18:05:24
-->
<template>
  <div class="header-wrap">
    <div class="title">
      <span>Yue</span>
    </div>
    <!-- 头部按钮 -->
    <div :class="['custom_menu-btn', clasName]">
      <button @click="openNav">
        <span class="s-1"></span>
        <span class="s-2"></span>
        <span class="s-3"></span>
      </button>
    </div>
  </div>
  <Menu :menu="menu" @resetBtn="resetBtn" :backgroundColor="backgroundColor" :fontColor="fontColor"></Menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Menu from '../../components/Menu/index.vue'

export default defineComponent({
  components: {
    Menu
  },
  setup() {

    const store = useStore()
    const state = reactive({
      clasName: 'custom_menu-btn',
      menu: '',
      backgroundColor: '',
      fontColor: ''
    })

    const openNav = () => {
      if (state.clasName === 'custom_menu-btn') {
        state.backgroundColor = store.state.menu.backgroundColor
        state.fontColor = store.state.menu.fontColor
        state.clasName = 'menu_btn-style'
        state.menu = 'menu_width'
      } else {
        state.clasName = 'custom_menu-btn'
        state.menu = ''
      }
      // console.log('openNav')
    }
    // 重置菜单按钮/收起菜单
    const resetBtn = () => {
      state.clasName = 'custom_menu-btn'
      state.menu = ''
    }
    return {
      openNav,
      resetBtn,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
@import url("../../assets/styles/btn.less");
.header-wrap {
  height: 76px;
  width: 100%;
  padding: 15px;
  // background: url("../../assets/image/hero-bg.png");
  // background-size: cover;
  // background-color: #bfa;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
  }
  .menu {
    .icon {
      font-size: 27px;
      cursor: pointer;
    }
  }
}
</style>
