import {
  ADD_COUNTER,
  ADD_TO_CART,
  DELETE_COUNTER
} from './mutation-types'

export default {

  //mutation存在的目的仅仅为了修改state状态
  //完成事件尽可能单一
  [ADD_COUNTER](state, data) {
    data.count++;
  },
  [ADD_TO_CART](state, data) {
    state.storeList.push(data)
  },
  [DELETE_COUNTER](state, data) {
    data.count--;
  }
}
