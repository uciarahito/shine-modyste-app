export const Actions = {
  signIn: ({commit}, payload) => {
    axios.post('http://localhost:3000/signIn', {
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      console.log('Action SignIn');
      console.log(response.data);
      commit('signIn', response.data)
    })
    .catch(error => {
      console.log(error);
      console.log('iiiiiiiii');
    })
  },
  signInVerif: ({commit}, payload) => {
    axios.post('http://localhost:3000/signIn', {
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      console.log('Action SignInVerif');
      console.log(response.data);
      commit('signIn', response.data)
    })
    .catch(error => {
      console.log(error);
    })
  },
  signUp: ({commit}, payload) => {
    axios.post('http://localhost:3000/signUp', {
      name: payload.name,
      username: payload.username,
      password: payload.password,
      email: payload.email,
      phone: payload.phone,
      image_url: payload.image_url
    })
    .then(response => {
      console.log('Action SignUp');
      console.log(response.data);
      commit('signUp', response.data)
    })
    .catch(error => {
      console.log(error);
    })
  },
  dataItems: ({commit}) => {
    axios.get('http://localhost:3000/allItem')
    .then(response => {
      console.log('Action Get All Item');
      console.log(response.data);
      commit('dataItems', response.data)
    })
    .catch(error => {
      console.log(error);
    })
  },
  listOrders: ({commit}) => {
    axios.get('http://localhost:3000/allOrderByUser', {headers: {'token': window.localStorage.getItem('token')}})
    .then(response => {
      console.log('Action Get All Order By User');
      console.log(response.data);
      commit('listOrders', response.data)
    })
    .catch(error => {
      console.log(error);
    })
  },
  checkout: ({commit}, payload) => {
    console.log('Ini payload: ');
    console.log(payload.user);
    console.log(payload.code_order);
    console.log(payload.itemlist);
    axios.post('http://localhost:3000/createOrder', {
      user: payload.user,
      code_order: payload.code_order,
      itemlist: payload.itemlist
    })
    .then(response => {
      console.log('Action Checkout');
      console.log(response.data);
      commit('orders', response.data)
    })
    .catch(error => {
      console.log('Kakakakaka');
      console.log(error);
    })
  }
}