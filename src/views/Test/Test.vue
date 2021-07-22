<!--
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-21 14:01:50
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 16:18:01
-->
<template>
  <div class="test">
    <button @click="mogonClick">mongo</button>
  </div>
</template>

<script lang="ts">
import { setMenuStyle } from '@/utils/setMenu'
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    onMounted(() => {
      setMenuStyle(store, "#eee", "#000")
    })
    const mogonClick = () => {
      console.log('mogonClick')
    }

    return {
      mogonClick
    }
  }
})
</script>

<style scoped lang="less">
.test {
  padding-top: 77px;
  background-color: #eeee;
}
</style>