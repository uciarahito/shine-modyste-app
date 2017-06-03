export const Getters = {
  dataItems: (state) => {
    return state.dataItems
  },
  listOrders: (state) => {
    return state.listOrders
  },
  orders: (state) => {
    return state.orders
  },
  dataCarts: (state) => {
    return state.dataCarts
  },
  cart: (state) => {
    return state.cart
  },
  isLogin: (state) => {
    return window.localStorage.getItem('token')
  },
  checkActivation: (state) => {
    return state.signUp
  }
}