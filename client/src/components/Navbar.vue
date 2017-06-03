<template lang="html">
  <div>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Shine Modyste</el-menu-item>
      <div class="user_menu" style="float:right" v-show="statusLogin == null">
        <el-menu-item index="1" @click="signInDialog">SignIn</el-menu-item>
        <el-menu-item index="1">SignIn FB</el-menu-item>
        <el-menu-item index="1" @click="signUpDialog">SignUp</el-menu-item>
      </div>

      <el-submenu index="2" style="float:right" v-show="statusLogin">
       <template slot="title">Arahito</template>
       <el-menu-item index="2-2">Profile</el-menu-item>
       <el-menu-item index="2-3" @click="signOut">SignOut</el-menu-item>
      </el-submenu>
      <el-badge v-show="cart != ''" :value="cart" class="item" style="float:right;padding:0px;margin-top:15px;margin-right:15px;">
        <el-button size="small" @click="view_cart">Cart</el-button>
      </el-badge>
    </el-menu>

    <el-dialog title="SignUp" v-model="dialogFormVisibleSignup">
      <el-form :model="form_signup">
        <el-form-item>
          <el-input v-model="form_signup.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.phone" placeholder="Phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.image_url" placeholder="Image url"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignup = false">Cancel</el-button>
        <el-button type="primary" @click="signUp(form_signup);dialogFormVisibleSignup = false;notification('SignUp succes')">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog title="SignIn" v-model="dialogFormVisibleSignin">
      <el-form :model="form_signin">
        <el-form-item>
          <el-input v-model="form_signin.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signin.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" @click="signIn(form_signin);dialogFormVisibleSignin = false;">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog title="SignIn Verification" v-model="dialogFormVisibleSigninVerif">
      <el-form :model="form_signin_verification">
        <el-form-item>
          <el-input v-model="form_signin_verification.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signin_verification.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSigninVerif = false">Cancel</el-button>
        <el-button type="primary" @click="signInVerif(form_signin_verification);dialogFormVisibleSigninVerif = false;notification('SignIn verification success')">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Shipping" v-model="dialogFormVisibleViewCart">
      <el-card class="box-card">
        <Basket></Basket>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleViewCart = false">Cancel</el-button>
        <el-button type="primary" @click="checkout">Checkout</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Basket from './Basket'

export default {
  components: {
    Basket
  },
  data() {
    return {
      form_signup: {
        name: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        image_url: ''
      },
      form_signin: {
        username: '',
        password: ''
      },
      form_signin_verification: {
        username: '',
        password: ''
      },
      dialogFormVisibleSignup: false,
      dialogFormVisibleSignin: false,
      dialogFormVisibleSigninVerif: false,
      dialogFormVisibleViewCart: false
    }
  },
  methods: {
    ...mapActions([
      "signIn", "signInVerif", "signUp"
    ]),
    signUpDialog(){
      this.dialogFormVisibleSignup = true
    },
    signInDialog(){
      this.dialogFormVisibleSignin = true
    },
    view_cart(){
      this.dialogFormVisibleViewCart = true
    },
    signOut(){
      window.localStorage.clear()
      window.location = "/"
    },
    notification(notif='') {
      if (notif='SignUp succes') {
        this.$message({
          message: 'SignUp succes, you mush signin first!',
          type: 'success'
        });
      } else if (notif='SignIn verification success') {
        this.$message({
          message: 'Signin verification success!',
          type: 'success'
        });
      }
    },
    checkout(){
      if (window.localStorage.getItem('user') == null) {
        this.dialogFormVisibleSigninVerif = true
        this.dialogFormVisibleViewCart = true
      } else {
        this.dialogFormVisibleViewCart = false
        let makeid = () => {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var token = localStorage.getItem('token').slice(0, 5)
          for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

          return token+'-'+text;
        }
        let tempIdCart = []
        let tempDataCart = this.$store.state.dataCarts
        tempDataCart.forEach(dataCart => {
          console.log(dataCart._id);
          tempIdCart.push(dataCart._id)
        })
        console.log('bisa gak ya??');
        console.log(tempIdCart);
        let data = {
          user: localStorage.getItem('id'),
          code_order: makeid(),
          itemlist: tempIdCart
        }
        // NOTE: JANGAN LUPA UNTUK di UNCOMMENT LAGI
        // this.$store.dispatch('checkout', data)

        let dataOrder = {
          user: localStorage.getItem('id'),
          code_order: makeid(),
          itemlist: this.$store.state.dataCarts
        }
        this.$store.commit('orders', dataOrder)
        this.$router.push('/order')
        // this.$route.push({ path: '/order', query: { cart: data }})
        console.log('sukses checkout');
      }
    }
  },
  computed: {
    ...mapGetters({
      statusLogin: "isLogin",
      dataItems: "dataItems"
    }),
    cart(){
      console.log('=======');
      console.log(this.$store.state.dataCarts);
      return this.$store.state.dataCarts.length
    }
  }
}
</script>

<style lang="css">
  .el-select{
    width: 100%
  }
  .el-card {
    text-align: left;
  }
  .el-menu{
    margin-top: -50px;
   border: 1px solid #d9d9d9;
  }
</style>
