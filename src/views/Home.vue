<!--
 * @Descripttion: home
 * @Author: LongWeiYi
 * @Date: 2021-07-15 17:36:50
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-22 10:13:47
-->
<template>
  <div class="home">Home</div>
</template>

<script lang="ts">
import { setMenuStyle } from '@/utils/setMenu'
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    onMounted(() => {
      setMenuStyle(store, 'rgba(246, 118, 86, 0.92)', '#F1F1F1')
    })
    return {}
  }
})
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100vh;
  background: url("../assets/image/hero-bg.png") no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-top: 77px;
}
</style>
