<template>
  <div class="modalWrap">
    <div
      class="modal"
      :class="$style.delete">
      <CloseButton :close-modal="closeDeleteModal"/>

      <p>Do you really want to delete this car?</p>
      <p :class="$style.carName">{{ vehicleFullName }}</p>

      <SubmitButtons :cancel-method="closeDeleteModal"
                     :submit-method="deleteVehicle">
        Delete
      </SubmitButtons>
    </div>

    <ModalBackground @click="closeDeleteModal"/>
  </div>
</template>

<script>
import axios from 'axios';
import { API_PATH } from '../../utils/constants';

import SubmitButtons from './Elements/SubmitButtons.vue';
import CloseButton from './Elements/CloseButton.vue';
import ModalBackground from './Elements/ModalBackground.vue';

export default {
  name: 'DeleteVehicleModal',
  components: {
    SubmitButtons,
    CloseButton,
    ModalBackground,
  },
  data() {
    return {};
  },
  methods: {
    closeDeleteModal() {
      this.$store.commit('closeEdit');
      this.$store.commit('toggleDelete');
    },
    deleteVehicle() {
      const url = `${API_PATH}/${this.$store.state.vehicleToModify.id}`;
      axios.delete(url)
        .then(() => {
          // console.log(r);
          this.$store.dispatch('getData');
          this.closeDeleteModal();
          this.$store.commit('showSuccess',
            'Vehicle successfully deleted!');
        })
        .catch(() => {
          this.$store.commit('showError',
            'There was an error deleting vehicle. Please try again later');
        });
      // this.$store.dispatch('deleteVehicle');
    },
  },
  computed: {
    vehicleFullName() {
      const v = this.$store.state.vehicleToModify;
      return `${v.manufacturer} ${v.model}`;
    },
  },
};
</script>

<style module>
.delete {
  user-select: none;
}

.carName {
  font-weight: 300;
  width: fit-content;
  border-bottom: 1px solid #000000;
  user-select: text;
}

</style>
