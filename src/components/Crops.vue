<template>
  <div class="col-md-12">
    <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
    <div v-if="crops" class="row justify-content-center journal-list">
        <journal-item v-for="(crop, index) in crops" v-bind:crop="crop" v-bind:index="index" :key="index"></journal-item>
        <!-- START: Add Crop Modal --->
        <div class="journal-item">
          <button class="text-icon new-crop morph rounded" v-b-modal.add-crop>+ <span>New Crop</span></button>
          <!-- <b-button v-b-modal.add-crop>Add New Crop</b-button> -->
          <modal-create-crop />
        </div>
        <!-- END: Add Crop Modal --->
    </div>
    <div v-else class="journal-list loading">
      Loading...
    </div>
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
.text-icon.new-crop {
  flex-wrap: wrap;
  width: 250px;
  height: 250px;
  font-size: 150px;
  line-height: 115px;
}
.text-icon.blue-green {
  background-image: linear-gradient(90deg, #22ff82, #21bdff, #5433ff);
}
.text-icon.new-crop span {
  width: 100%;
  font-size: 17px;
  line-height: 18px;
  margin-bottom: 20px;
}
</style>