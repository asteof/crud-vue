<template>
  <div :class="$style.modalWrap">
    <div :class="$style.modal">
      <button :class="$style.closeBtn"
              @click="closeDeleteModal">
        <img src="../../../assets/close.svg" alt="X">
      </button>
      <p>Do you really want to delete this car?</p>
      <p :class="$style.carName">{{ this.$store.state.vehicleToDelete.vehicleFullName }}</p>
      <div :class="$style.submitBtnWrap">
        <button @click="closeDeleteModal">Cancel</button>
        <button @click="deleteVehicle">Delete</button>
      </div>
    </div>

    <ModalBackground/>
  </div>
</template>

<script>
import axios from 'axios';
import ModalBackground from './ModalBackground.vue';
import { API_PATH } from '../../../utils/constants';

export default {
  name: 'DeleteModal',
  components: {
    ModalBackground
  },
  data() {
    return {};
  },
  methods: {
    closeDeleteModal() {
      this.$store.commit('toggleDelete');
    },
    deleteVehicle() {
      const url = `${API_PATH}/vehicles/${this.$store.state.vehicleToDelete.id}`;
      axios.delete(url)
        .then(r => {
          console.log(r);
          this.$store.dispatch('getData');
        })
        .catch(console.log);

      this.closeDeleteModal();
    },
  },
};
</script>

<style module>
.modalWrap {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal {
  position: fixed;
  background-color: #d0fd76;
  width: fit-content;
  padding: 2em;
  border-radius: 1em;
  z-index: 3;
}

.carName {

}

.submitBtnWrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.submitBtnWrap button {
  font-size: 1em;
  background-color: #26262630;
  border-radius: 0.5em;
  padding: 0.4em 1.8em;
}

.submitBtnWrap button:hover {
  background-color: #26262640;
}

.submitBtnWrap button:active {
  background-color: #26262620;
}

.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  height: 3em;
  opacity: 0.4;
}

.closeBtn:hover {
  opacity: 0.8;
}

</style>
