<template>
  <div>
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div v-if="comics">
      <article class="covers" v-for="(comic, index) in comics" :key="index">
        <div>
          <img style="margin: 10px" :src="comic.image" height="291px" width="192px">
          <p >{{ comic.name }}</p>
          <hr>
          <button class="button" @click="deleteComic(comic.id)">
            Delete
          </button>
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
      comics: [],
      name: '',
      image: ''
    }
  },
  firestore () {
    return {
      comics: db.collection('comics').orderBy('createdAt')
    }
  },
  methods: {
    addComic (name, image) {
      const createdAt = new Date()
      let doc = {
        name: name,
        image: image,
        createdAt: createdAt
      }
      //db.collection('comics').add({ name, image, createdAt })
      db.collection("comics").doc(name).set(doc).then(function() {
        // Clear values
        //this.name = ''
        //this.image = ''
        console.log("Document successfully written!");
      }).catch(function(error) {
        console.error("Error writing document: ", error);
      });
    },
    deleteComic (id) {
      db.collection('comics').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  /*created(){
    this.comics = db.collection('comics').orderBy('createdAt')
  }*/
}
</script>