<template>
  <div class="modalWrap">
    <div class="modal"
         :class="$style.edit">
      <CloseButton :close-modal="closeEditModal"/>

      <form @submit.prevent="editVehicle">
        <VehicleDataForm v-model="formData" id-prefix="editVehicle"/>

        <div :class="$style.deleteBtnWrap">
          <button @click="openDeleteModal"
                  type="button">
            Delete vehicle <img src="../../assets/delete.svg" alt="X">
          </button>
        </div>

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
import { API_PATH } from '../../utils/constants';

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
    ModalBackground,
  },
  data() {
    return {
      formData: {},
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
          this.$store.commit('showSuccess',
            'Vehicle successfully edited!');
        })
        .catch(() => {
          this.$store.commit('showError',
            'There was an error editing vehicle. Please try again later');
        });
    },
    closeEditModal() {
      this.$store.commit('toggleEdit');
    },
    openDeleteModal() {
      this.$store.commit('toggleDelete');
    },
  },
  watch: {
    readonlyFormData: {
      handler() {
        this.formData = Object.assign(this.readonlyFormData);
      },
      deep: true,
    },
  },
};
</script>

<style module>
.edit {

}
.deleteBtnWrap {
  display: flex;
  justify-content: flex-start;
  margin: 0 2em 1em;
  transform: translateY(-2em);
}

.deleteBtnWrap button{
  display: flex;
  align-items: center;
  color: #ea0000;
  font-size: 1em;
  background-color: #DE7C7C30;
  border-radius: 0.5em;
  padding: 0.4em 1em;
  transition: all 0.3s
}

.deleteBtnWrap button:hover {
  background-color: #F88A8A4D;
}

.deleteBtnWrap button:active {
  background-color: #DC565662;
}

.deleteBtnWrap button img {
  width: 1em;
  margin: 0 0 0 0.5em;
}

</style>
