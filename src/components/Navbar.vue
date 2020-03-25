<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="user-nav"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <b-navbar-brand tag="h1">
        <img alt="Vue logo" src="../assets/logo.png" width="34" height="50">
        <span>BudBuddy</span>
      </b-navbar-brand>
    </b-navbar-brand>

    <b-collapse id="user-nav" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="about">About</b-nav-item>
        <b-nav-item to="dashboard">Dashboard</b-nav-item>
        <!-- <b-nav-item to="schedule">Journal</b-nav-item>
        <b-nav-item to="schedule">Schedule</b-nav-item>
        <b-nav-item to="resources">Resources</b-nav-item>
        <b-nav-item to="calendar">Calendar</b-nav-item>
        <b-nav-item to="wishlist">Wishlist</b-nav-item> -->
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-if="user.loggedIn" v-slot:button-content>
            <em>{{user.data.displayName}}</em>
          </template>
          <template v-else v-slot:button-content>
            <em>Account</em>
          </template>
          <template v-if="user.loggedIn">
            <b-dropdown-item to="dashboard">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="signOut">Sign Out</b-dropdown-item>
          </template>
          <template v-else>
            <b-dropdown-item to="login">Login</b-dropdown-item>
            <b-dropdown-item to="register">Register</b-dropdown-item>
          </template>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>

    
    <!-- <b-navbar-nav v-if="user.loggedIn">
      <b-nav-text v-if="user.loggedIn">{{user.data.displayName}}</b-nav-text>
      <b-nav-item @click.prevent="signOut">Sign out</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-else>
      <b-nav-item to="login">Login</b-nav-item>
      <b-nav-item to="register">Register</b-nav-item>
    </b-navbar-nav> -->
    
  </b-navbar>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
  }
};
</script>
<style scoped>
h1.navbar-brand {
  margin: 0;
  padding: 0;
}
</style>