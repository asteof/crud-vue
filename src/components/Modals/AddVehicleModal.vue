<template>
  <div class="modalWrap">
    <div class="modal"
         :class="$style.add">
      <CloseButton :close-modal="closeAddModal"/>

      <form @submit.prevent="addVehicle">
        <VehicleDataForm v-model="formData" id-prefix="addVehicle"/>

        <SubmitButtons :cancel-method="closeAddModal">
          Add new vehicle
        </SubmitButtons>
      </form>
    </div>
    <ModalBackground/>
  </div>
</template>

<script>
import axios from 'axios';
import { API_PATH } from '../../utils/constants';

import VehicleDataForm from './Elements/VehicleDataForm.vue';
import SubmitButtons from './Elements/SubmitButtons.vue';
import CloseButton from './Elements/CloseButton.vue';
import ModalBackground from './Elements/ModalBackground.vue';

export default {
  name: 'AddVehicleModal',
  components: {
    VehicleDataForm,
    SubmitButtons,
    CloseButton,
    ModalBackground,
  },
  data() {
    return {
      formData: {
        createdAt: '',
        manufacturer: '',
        model: '',
        fuelType: '',
        engineDisplacement: '',
        transmissionType: '',
        modelYear: '',
        vin: '',
        countryCode: '',
        registrationPlate: '',
        color: '',
        imageLink: '',
        id: 0,
      },
    };
  },
  methods: {
    addVehicle() {
      this.formData.createdAt = new Date().toISOString();
      this.formData.id = this.$store.state.lastVehicleId + 1;

      axios.post(API_PATH, this.formData)
        .then(() => {
          this.closeAddModal();
          this.$store.dispatch('getData');
          this.$store.commit('showSuccess',
            'Vehicle successfully added!');
        })
        .catch(() => {
          this.$store.commit('showError',
            'There was an error adding vehicle. Please try again later');
        });
    },
    closeAddModal() {
      this.$store.commit('toggleAdd');
    },
  },
};
</script>

<style module>
.add {

}
</style>

