<template>
  <div class="modalWrap">
    <div class="modal"
         :class="$style.edit">
      <CloseButton :close-modal="closeEditModal"/>

      <form @submit.prevent="editVehicle">
        <VehicleDataForm v-model="formData" id-prefix="editVehicle"/>

        <SubmitButtons :cancel-method="closeEditModal">
          Edit vehicle
        </SubmitButtons>
      </form>
    </div>
    <ModalBackground/>
  </div>
</template>

<script>
import axios from 'axios';
import { API_PATH } from '../../../utils/constants';
import VehicleDataForm from './Elements/VehicleDataForm.vue';
import SubmitButtons from './Elements/SubmitButtons.vue';
import CloseButton from './Elements/CloseButton.vue';
import ModalBackground from './Elements/ModalBackground.vue';

export default {
  name: 'EditModal',
  components: {
    VehicleDataForm,
    SubmitButtons,
    CloseButton,
    ModalBackground
  },
  data() {
    return {
      formData: {}
    };
  },
  computed: {
    readonlyFormData() {
      return Object.assign(this.$store.state.vehicleToModify);
    },
  },
  methods: {
    editVehicle() {
      const url = `${API_PATH}/${this.formData.id}`;
      axios.put(url, this.formData)
        .then(() => {
          this.$store.dispatch('getData');
          this.closeEditModal();
        })
        .catch(console.log);
    },
    closeEditModal() {
      this.$store.commit('toggleEdit');
    }
  },
  watch: {
    readonlyFormData: {
      handler() {
        this.formData = Object.assign(this.readonlyFormData);
      },
      deep: true
    }
  }
};
</script>

<style module>
.edit {

}
</style>
