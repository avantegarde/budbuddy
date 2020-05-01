<template>
  <div class="journal-item morph rounded">
    <router-link v-bind:to="{name: 'Journal', params: { index: index } }">
      <div class="journal-header">
        <!-- <strains :strains="crop ? crop.name : null"></strains> -->
        <h2 class="title">{{ crop.name }}</h2>
      </div>
      <!-- <div class="featured-img" :style="{ backgroundImage: featuredImage(journal.featured_image) }"></div> -->
    </router-link>
    <p>Started: {{ this.$moment() | moment("diff", crop.startDate, "days") }} Days ago</p>
    <p>Age: {{ getDisplayAge(crop.startDate) }}</p>
    <p>Flower Weeks: {{ crop.flowerWeeks }}</p>
    <!-- <div>
      <b-button variant="danger" v-b-modal="crop.id">Delete</b-button>
      <modal-delete-crop :crop="crop" />
    </div> -->
  </div>
</template>
<script>
//import ModalDeleteCrop from '@/components/ModalDeleteCrop.vue'
export default {
  props: ['crop', 'index'],
  
  methods: {
    getDisplayAge(d){
      var currDay = this.$moment(new Date());
      var date = this.$moment(d);
      var diff = this.$moment.duration(currDay.diff(date));
      var display = Math.floor(diff.asWeeks()) + " weeks, " + diff.days()%7 + " days.";
      return display;
    },
  },
  components: {
    //ModalDeleteCrop
  },
}
</script>
<style scoped>
.journal-item > a {
  display: block;
}
.journal-header {
  display: block;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0;
}
.journal-header:after {
  content: "";
  display: block;
  clear: both;
}
.journal-item .title {
  display: block;
  width: 100%;
  font-size: 18px;
  line-height: 18px;
}
.journal-item .strains {
  display: block;
  width: 115px;
  float: left;
}
.journal-item .strains .strain-icon:first-of-type {
  margin-right: 15px;
}
.featured-img {
  display: block;
  width: 100%;
  height: 0;
  margin: 0;
  padding: 0;
  padding-bottom: 50%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  clear: both;
}
</style>