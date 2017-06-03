export const Mutations = {
  signIn: (state, payload) => {
    window.localStorage.setItem('token', payload.token)
    window.localStorage.setItem('user', payload.username)
    window.localStorage.setItem('id', payload.id)
    state.user.push(payload)
    window.location = "/"
  },
  signInVerif: (state, payload) => {
    window.localStorage.setItem('token', payload.token)
    window.localStorage.setItem('user', payload.username)
    window.localStorage.setItem('id', payload.id)
    state.user.push(payload)
  },
  signUp: (state, payload) => {
    state.user.push(payload)
  },
  dataItems: (state, payload) => {
    state.dataItems = payload
  },
  listOrders: (state, payload) => {
    state.listOrders = payload
  },
  cart: (state, payload) => {
    state.cart.push(payload)
  },
  dataCarts: (state, payload) => {
    console.log('DataCarts mutate');
    console.log(payload);
    state.dataCarts.push(payload)
  },
  orders: (state, payload) => {
    state.orders.push(payload)
  },
  total: (state, payload) => {
    state.total = payload
  }
}