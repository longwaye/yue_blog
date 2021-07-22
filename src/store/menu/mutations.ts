/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-07-21 14:42:15
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 15:07:17
 */
import { SET_MENU_BACKGROUND_COLOR, SET_MENU_FONT_COLOR } from './actionTypes'
import { IMenuState } from './state'

export default {
  [SET_MENU_BACKGROUND_COLOR](state: IMenuState, color: string) {
    state.backgroundColor = color
  },
  [SET_MENU_FONT_COLOR](state: IMenuState, color: string) {
    state.fontColor = color
  }
}
