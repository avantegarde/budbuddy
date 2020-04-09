<template>
  <div class="col-md-4">
    <div class="journal-item morph rounded">
      <router-link v-bind:to="{name: 'Journal', params: { index: index } }">
        <div class="journal-header">
          <!-- <strains :strains="crop ? crop.name : null"></strains> -->
          <h2 class="title">{{ crop.name }}</h2>
        </div>
        <!-- <div class="featured-img" :style="{ backgroundImage: featuredImage(journal.featured_image) }"></div> -->
      </router-link>
      <!-- <div>
        <b-button variant="danger" v-b-modal="crop.id">Delete</b-button>
        <modal-delete-crop :crop="crop" />
      </div> -->
    </div>
  </div>
</template>
<script>
//import ModalDeleteCrop from '@/components/ModalDeleteCrop.vue'
export default {
  props: ['crop', 'index'],
  components: {
    //ModalDeleteCrop
  }
}
</script>
<style scoped>
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
  width: calc(100% - 115px);
  float: left;
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