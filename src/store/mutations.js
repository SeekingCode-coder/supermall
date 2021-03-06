import {
  ADD_COUNTER,
  ADD_TO_CART,
  DELETE_COUNTER,
  CHANGE_CHECKSTATUS
} from './mutation-types'

export default {

  //mutation存在的目的仅仅为了修改state状态
  //完成事件尽可能单一
  [ADD_COUNTER](state, data) {
    data.count++;
  },
  [ADD_TO_CART](state, data) {
    data.isChecked = false
    state.storeList.push(data)
  },
  [DELETE_COUNTER](state, data) {
    data.count--;
  },
  [CHANGE_CHECKSTATUS](state, data) {
    data.isChecked = !data.isChecked
  }
}
