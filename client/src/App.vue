<template>
  <div id="app">
    <Navbar></Navbar>
    <Search></Search>
    <Carousel></Carousel>
    <router-view></router-view>
    <TopItem></TopItem>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Search from './components/Search'
import Carousel from './components/Carousel'
import Content from './components/Content'
import TopItem from './components/TopItem'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Search,
    Carousel,
    Content,
    TopItem,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
