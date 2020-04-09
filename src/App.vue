<template>
  <div id="app">
    <Navbar/>
    <!-- <Nav/> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import Nav from './components/Nav.vue'

//const axios = require('axios').default;

export default {
  data: () => {
    return {
      //journals: [],
    }
  },
  components: {
    Navbar,
  },
  created(){
    
  }
}
</script>