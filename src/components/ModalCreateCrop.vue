<template>
  <div>
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
</template>
<script>
import { db } from '../store/db'

export default {
  data () {
    return {
      name: '',
      startDate: '',
      flowerWeeks: '',
      notes: {
        date: this.today(),
        note: ''
      },
      nutes: {
        units: 'ml',
        power: [
          {
            name: 'si',
            p: 100,
          },
          {
            name: 'calmag',
            p: 100,
          },
          {
            name: 'micro',
            p: 100,
          },
          {
            name: 'gro',
            p: 100,
          },
          {
            name: 'bloom',
            p: 100,
          },
        ]
      }
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
        nutes: this.nutes,
      }
      db.collection("crops").add(doc).then(() => {
        // Clear form values
        this.name = ''
        this.startDate = ''
        this.flowerWeeks = ''
        this.notes = {
          date: this.today(),
          note: ''
        }
        console.log("Document successfully written!");
        this.hideModal('add-crop');
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    },
    today(){
      var today = new Date();
      var date = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
      return date;
    },
    showModal(id) {
      this.$bvModal.show(id);
    },
    hideModal(id) {
      this.$bvModal.hide(id);
    },
  }
}
</script>