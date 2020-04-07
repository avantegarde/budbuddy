<template>
  <div>
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div v-if="crops">
      <article class="covers" v-for="(crop, index) in crops" :key="index">
        <div>
          <h3>{{ crop.name }}</h3>
          <p>Start Date: {{ crop.startDate }}</p>
          <p>FlowerWeeks: {{ crop.flowerWeeks }}</p>
          <div class="notes" v-if="crop.notes">
            <h4>Notes:</h4>
            <div v-for="(note, index) in crop.notes" :key="index">
              {{note.date}}
              <br>
              {{note.note}}
            </div>
          </div>
          <div>
            <b-button v-b-toggle.my-collapse>
              <span class="when-opened">Close</span> <span class="when-closed">Add</span> New Note
            </b-button>
            <b-collapse id="my-collapse">
              <!-- Content here -->
              <form @submit.prevent="addNote(crop.id, crop.notes, newNote)">
                <input type="date" v-model="newNote.date" placeholder="Note Date" class="input" required>
                <br>
                <textarea v-model="newNote.note" placeholder="Notes" class="input" required></textarea>
                <br>
                <button type="submit" class="button">Add Note</button>
              </form>
            </b-collapse>
          </div>
          <hr>
          <b-button variant="danger" v-b-modal="crop.id">Delete Crop</b-button>
        </div>
        <hr>
        <!-- START: Delete Crop Modal --->
        <div>
          <b-modal :id="crop.id" title="Delete Crop" hide-footer>
            <h3>Are you sure?</h3>
            <b-button variant="danger" @click="deleteCrop(crop.id)">Delete Crop</b-button>
          </b-modal>
        </div>
        <!-- END: Delete Crop Modal --->
      </article>
    </div>
    
    <!-- START: Add Crop Modal --->
    <div>
      <b-button v-b-modal.add-crop>Add New Crop</b-button>

      <b-modal id="add-crop" title="Add a New Crop" hide-footer>
        <form @submit.prevent="addCrop(name, startDate, flowerWeeks, notes)">
          <input type="text" v-model="name" placeholder="Strain Name" class="input" required>
          <input type="date" v-model="startDate" placeholder="startDate" class="input" required>
          <input type="number" v-model="flowerWeeks" placeholder="# Flower Weeks" class="input" required>
          <hr>
          <input type="date" v-model="notes.date" placeholder="Note Date" class="input" required>
          <br>
          <textarea v-model="notes.note" placeholder="Notes" class="input" required></textarea>
          <hr>
          <b-button type="submit" class="button">Add New Crop</b-button>
        </form>
      </b-modal>
    </div>
    <!-- END: Add Crop Modal --->

  </div>
</template>
<script>
//import firebase from 'firebase'
import { db } from '../store/db'

export default {
  name: 'Crops',
  data () {
    return {
      name: '',
      startDate: '',
      flowerWeeks: '',
      notes: {
        date: this.today(),
        note: ''
      },
      newNote: {
        date: this.today(),
        note: ''
      },
    }
  },
  methods: {
    addCrop (name, startDate, flowerWeeks, notes) {
      const createdAt = new Date()
      let doc = {
        createdAt: createdAt,
        name: name,
        startDate: startDate,
        flowerWeeks: flowerWeeks,
        notes: [notes],
      }
      db.collection("crops").add(doc).then(() => {
        // Clear form values
        this.name = ''
        this.startDate = ''
        this.flowerWeeks = ''
        this.notes = ''
        console.log("Document successfully written!");
        this.hideModal('add-crop');
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    deleteCrop (id) {
      db.collection("crops").doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
          this.hideModal(id);
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    },
    addNote (id, notes, newNote) {
      notes.push(newNote)
      let data = {
        notes: notes
      }
      db.collection("crops").doc(id).set(data, { merge: true }).then(() => {
        // Clear form values
        this.newNote.note = ''
        console.log("Document successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    today(){
      var today = new Date();
      var date = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
      return date;
    },
    hideModal(id) {
      this.$bvModal.hide(id);
    },
    showModal(id) {
      this.$bvModal.show(id);
    },
    /*logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },*/
  },
  computed: {
    crops(){
      return this.$store.state.crops;
    }
  },
  created () {
    this.$store.dispatch('bindCrops', db.collection('crops'))
  }
}
</script>
<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>