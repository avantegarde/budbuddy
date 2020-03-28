import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
//import * as firebase from "firebase";
import firebase from "firebase/app"
//import 'firebase/firestore'

Vue.config.productionTip = false;

/*const configOptions = {
  apiKey: "AIzaSyAONPC5ZYM6ed-W5qlVxYPzfa7oY-aQIDk",
  authDomain: "budbuddy-232c4.firebaseapp.com",
  databaseURL: "https://budbuddy-232c4.firebaseio.com",
  projectId: "budbuddy-232c4",
  storageBucket: "gs://budbuddy-232c4.appspot.com",
  messagingSenderId: "475467948845"
}; */

//firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

//export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
