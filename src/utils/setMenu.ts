/*
 * @Descripttion: 菜单设置
 * @Author: LongWeiYi
 * @Date: 2021-07-21 16:10:54
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 16:16:35
 */

import { SET_MENU_BACKGROUND_COLOR, SET_MENU_FONT_COLOR } from '@/store/menu/actionTypes'

const setMenuStyle = (store: any, bgColor: string, fColor: string) => {
  store.commit(SET_MENU_BACKGROUND_COLOR, bgColor)
  store.commit(SET_MENU_FONT_COLOR, fColor)
}

export { setMenuStyle }
