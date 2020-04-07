<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user.loggedIn">
              <div v-if="user.loggedIn" class="alert alert-success" role="alert">You are logged in!</div>
              <Crops />
            </div>
            <div v-else>Please <router-link to="login">Log In</router-link></div>
          </div>
        </div>
      </div>
    </div>
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