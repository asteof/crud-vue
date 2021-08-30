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
import { API_PATH } from '../../../utils/constants';
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
    ModalBackground
  },
  data() {
    return {
      formData: {
        createdAt: '',
        manufacturer: '',
        model: '',
        fuel_type: '',
        engine_displacement: '',
        transmission_type: '',
        model_year: '',
        vin: '',
        country_code: '',
        registration_plate: '',
        color: '',
        image_link: ''
        // id": "65"
      }
    };
  },
  methods: {
    addVehicle() {
      axios.post(API_PATH, this.formData)
        .then(() => {
          this.closeAddModal();
          this.$store.dispatch('getData');
        })
        .catch(console.log);
    },
    closeAddModal() {
      this.$store.commit('toggleAdd');
    }
  }
};
</script>

<style module>
.add {

}

</style>
