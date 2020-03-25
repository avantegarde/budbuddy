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
      journals: [],
      parents: [],
    }
  },
  components: {
    Navbar,
    //Nav
  },
  created(){
    /*axios
        .get('http://localhost:8888/wp-json/wp/v2/pages?per_page=100')
        .then((res) => { this.journals = res.data })
        .catch(error => console.log(error));*/
  }
}
</script>