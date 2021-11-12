export default {
  cartLength(state) {
    return state.storeList.length;
  },
  cartList(state) {
    return state.storeList
  },
  cartCount(state) {
    let count = 0;
    state.storeList.forEach(element => {
      count += element.count
    });
    return count
  }
}
