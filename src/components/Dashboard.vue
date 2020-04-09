<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div v-if="user.loggedIn" class="row">
      <Crops />
    </div>
    <div v-else>Please <router-link to="/login">Log In</router-link></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Crops from '@/components/Crops.vue'

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  components: {
    Crops
  }
};
</script>