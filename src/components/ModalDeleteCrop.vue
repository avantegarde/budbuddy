<template>
  <div>
    <b-modal :id="crop.id" title="Delete Crop" hide-footer>
      <p>Are you sure you want to delete the crop: <strong>"{{crop.name}}"</strong>?</p>
      <b-button variant="danger" @click="deleteCrop(crop.id)">Delete Crop</b-button>
    </b-modal>
  </div>
</template>
<script>
import { db } from '../store/db'

export default {
  props: ['crop'],
  methods: {
    deleteCrop (id) {
      db.collection("crops").doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          this.hideModal(id);
          this.$router.push({ path: '/dashboard' })
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
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