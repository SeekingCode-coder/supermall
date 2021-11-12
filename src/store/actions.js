import {
  ADD_COUNTER,
  ADD_TO_CART,
  DELETE_COUNTER,
  CHANGE_CHECKSTATUS
} from './mutation-types'

export default {
  addGood(context, data) {
    //判断是否添加同样商品，如果是，则加一
    let oldproduct = context.state.storeList.find(item => item.iid == data.iid)
    if (oldproduct) {
      context.commit(ADD_COUNTER, oldproduct);
    } else {
      data.count = 1;
      context.commit(ADD_TO_CART, data);
    }
  },
  deleteGood(context, data) {
    let oldproduct = context.state.storeList.find(item => item.iid == data.iid)
    if (oldproduct) {
      if (oldproduct.count > 0) {
        context.commit(DELETE_COUNTER, oldproduct);
      }
    }
  },
  changeCheckStatus(context, data) {
    let oldproduct = context.state.storeList.find(item => item.iid == data.iid)
    if (oldproduct) {
      context.commit(CHANGE_CHECKSTATUS, oldproduct)
    }
  }
}
