<!--
 * @Descripttion: 作品
 * @Author: LongWeiYi
 * @Date: 2021-07-20 16:03:30
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-22 10:13:17
-->
<template>
  <div class="works">
    <!-- cont inner start -->
    <div class="cont s--inactive">
      <div class="cont__inner">
        <!-- el start -->
        <div class="el" v-for="(item, index) in 5" :key="index">
          <div class="el__overflow">
            <div class="el__inner">
              <div class="el__bg"></div>
              <div class="el__preview-cont">
                <h2 class="el__heading">Section {{ index + 1 }}</h2>
              </div>
              <div class="el__content">
                <div class="el__text">Whatever</div>
                <div class="el__close-btn"></div>
              </div>
            </div>
          </div>
          <div class="el__index">
            <div class="el__index-back">{{ index + 1 }}</div>
            <div class="el__index-front">
              <div class="el__index-overlay" :data-index="index + 1">{{ index + 1 }}</div>
            </div>
          </div>
        </div>
        <!-- el end -->
      </div>
    </div>
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
      // 设置menu颜色样式
      setMenuStyle(store, 'rgba(31,31,31, 0.92)', '#f1f1f1')

      var $cont = document.querySelector('.cont')
      var $elsArr = [].slice.call(document.querySelectorAll('.el'))
      var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'))

      setTimeout(function () {
        ($cont as Element).classList.remove('s--inactive');
      }, 200);

      $elsArr.forEach(function ($el: HTMLAnchorElement) {
        $el.addEventListener('click', function () {
          if ($el.classList.contains('s--active')) return
            ; ($cont as Element).classList.add('s--el-active')
          $el.classList.add('s--active')
        })
      })

      $closeBtnsArr.forEach(function ($btn: HTMLAnchorElement) {
        $btn.addEventListener('click', function (e: { stopPropagation: () => void }) {
          e.stopPropagation()
            ; ($cont as Element).classList.remove('s--el-active')
          document.querySelector('.el.s--active')?.classList.remove('s--active')
        })
      })
    })

    return {}
  }
})
</script>

<style scoped lang="less">
@import url("../../assets/styles/works.less");
.works {
  // padding-top: 77px;
  // width: 100%;
  background: #1f1f1f;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  // overflow: hidden;
  // padding-bottom: 70px;
}
</style>
