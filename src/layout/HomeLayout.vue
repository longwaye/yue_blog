<!--
 * @Descripttion: Layout
 * @Author: LongWeiYi
 * @Date: 2021-07-15 17:58:09
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-20 15:42:33
-->
<template>
  <div class="home-container">
    <div class="header">
      <Header v-once />
    </div>
    <router-view />
    <!-- <Footer v-once /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header/index.vue'
// import Footer from '../components/Footer/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    // Footer
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.home-container {
  width: 100%;

  .header {
    // float: left;
    position: absolute;
    width: 100%;
  }
}
</style>
