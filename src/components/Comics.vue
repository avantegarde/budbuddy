<template>
  <div>
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div v-if="comics">
      <article class="covers" v-for="(comic, index) in comics" :key="index">
        <div>
          <img style="margin: 10px" :src="comic.image" height="291px" width="192px">
          <p >{{ comic.name }}</p>
          <button class="button" @click="deleteComic(comic.id)">
            Delete
          </button>
          <hr>
        </div>
      </article>
    </div>
    
    <form @submit.prevent="addComic(name, image)">
      <h2>Add a New Comic Cover</h2>
      <input v-model="name" placeholder="Comic Name" class="input" required>
      <input v-model="image" placeholder="Comic Image URL" class="input" required>
      <button type="submit" class="button">Add New Comic</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
import { db } from '../store/db'

export default {
  name: 'Comics',
  data () {
    return {
      name: '',
      image: ''
    }
  },
  /*firestore () {
    return {
      comics: db.collection('comics').orderBy('createdAt')
    }
  },*/
  methods: {
    addComic (name, image) {
      const createdAt = new Date()
      let doc = {
        name: name,
        image: image,
        createdAt: createdAt
      }
      //db.collection('comics').add({ name, image, createdAt })
      //db.collection("comics").doc(name).set(doc).then(() => {
      db.collection("comics").add(doc).then(() => {
        // Clear form values
        this.name = ''
        this.image = ''
        console.log("Document successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    deleteComic (id) {
      db.collection("comics").doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
  },
  computed: {
    comics(){
      return this.$store.state.comics;
    }
  },
  created () {
    this.$store.dispatch('bindComics', db.collection('comics'))
  }
}
</script>