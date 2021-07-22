/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-07-15 17:36:50
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 15:26:13
 */
import { createStore } from 'vuex'
import menu from './menu'
import { IMenuState } from './menu/state'

interface IStore {
  menu: IMenuState
}

export default createStore<IStore>({
  modules: {
    menu
  }
})
