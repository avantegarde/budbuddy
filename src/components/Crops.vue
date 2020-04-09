<template>
  <div class="col-md-12">
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div v-if="crops" class="row justify-content-center journal-list">
        <journal-item v-for="(crop, index) in crops" v-bind:crop="crop" v-bind:index="index" :key="index"></journal-item>
    </div>
    <div v-else class="journal-list loading">
      Loading...
    </div>
    
    <!-- START: Add Crop Modal --->
    <div>
      <b-button v-b-modal.add-crop>Add New Crop</b-button>
      <modal-create-crop />
    </div>
    <!-- END: Add Crop Modal --->

  </div>
</template>
<script>
//import firebase from 'firebase'
import { db } from '../store/db'
import JournalItem from '@/components/JournalItem.vue'
import ModalCreateCrop from '@/components/ModalCreateCrop.vue'

export default {
  name: 'Crops',
  methods: {
    
  },
  computed: {
    crops(){
      return this.$store.state.crops;
    }
  },
  created () {
    this.$store.dispatch('bindCrops', db.collection('crops'))
  },
  components: {
    JournalItem,
    ModalCreateCrop,
  }
}
</script>
<style scoped>

</style>