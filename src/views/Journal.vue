<template>
  <div class="journals">
    <div v-if="crop">
      <h1 class="journal-title">{{ crop.name }}</h1>
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
      <modal-delete-crop :crop="crop" />
      <!-- <b-button variant="danger" @click="goDash">Go to Dashboard</b-button> -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
<script>
import { db } from '../store/db'
import ModalDeleteCrop from '@/components/ModalDeleteCrop.vue'

export default {
  name: 'Journal',
  props: ['index'],
  data () {
    return {
      newNote: {
        date: this.today(),
        note: ''
      },
    }
  },
  methods: {
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
    goDash(){
      this.$router.push({ path: '/dashboard' })
    }
  },
  computed: {
    crop(){
      return this.$store.state.crops[this.index];
    }
  },
  created () {
    this.$store.dispatch('bindCrops', db.collection('crops'))
  },
  components: {
    ModalDeleteCrop
  }
}
</script>
<style>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
