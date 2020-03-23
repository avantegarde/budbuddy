<template>
  <div id="app">
    <Nav/>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

//const axios = require('axios').default;

export default {
  data: () => {
    return {
      journals: [],
      parents: [],
    }
  },
  components: {
    Nav
  },
  created(){
    /*axios
        .get('http://localhost:8888/wp-json/wp/v2/pages?per_page=100')
        .then((res) => { this.journals = res.data })
        .catch(error => console.log(error));*/
  }
}
</script>