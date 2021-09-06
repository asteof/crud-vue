<template>
  <transition-group name="modal">
    <AddVehicleModal v-show="this.$store.state.showAddModal" key="add"/>
    <EditVehicleModal v-show="this.$store.state.showEditModal" key="edit"/>
    <DeleteVehicleModal v-show="this.$store.state.showDeleteModal" key="delete"/>
  </transition-group>

  <transition name="s-popup">
    <SuccessPopup v-show="this.$store.state.showSuccessPopup"/>
  </transition>

  <transition name="e-popup">
    <ErrorPopup v-show="this.$store.state.showErrorPopup"/>
  </transition>

</template>

<script>
import AddVehicleModal from './Modals/AddVehicleModal.vue';
import EditVehicleModal from './Modals/EditVehicleModal.vue';
import DeleteVehicleModal from './Modals/DeleteVehicleModal.vue';
import SuccessPopup from './Modals/Popups/SuccessPopup.vue';
import ErrorPopup from './Modals/Popups/ErrorPopup.vue';

export default {
  name: 'Modals',
  components: {
    AddVehicleModal,
    EditVehicleModal,
    DeleteVehicleModal,
    SuccessPopup,
    ErrorPopup,
  },
};
</script>

<style>
/* modal transition */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-active {
  transition: all 0.3s;
}

.modal-leave-active {
  transition: all 0.5s;
}

/* success transition */
.s-popup-enter-from,
.s-popup-leave-to {
  opacity: 0;
  transform: scale(0.3);
}

.s-popup-enter-to,
.s-popup-leave-from {
  opacity: 1;
  transform:scale(1);
}

.s-popup-enter-active {
  transition: all 0.4s;
}

.s-popup-leave-active {
  transition: all 0.4s;
}

.s-popup-enter-from,
.s-popup-leave-to {
  opacity: 0;
  /*transform: translateY(-4em);*/
}

/* error transition */
.e-popup-enter-to,
.e-popup-leave-from {
  animation: errorAnim 1s ease;
  /*opacity: 1;*/
  /*transform: translateY(0);*/
}

.e-popup-enter-active {
  /*transition: all 1s;*/
}

.e-popup-leave-active {
  transition: all 1s;
}

@keyframes errorAnim {
  0% {
    opacity: 0;
    transform: translateY(-8em);
  }
  80% {
    transform: translateX(-8px);
  }
  85% {
    transform: translateX(8px);
  }
  90% {
    opacity: 1;
    transform: translateX(-4px);
  }
  95% {
    transform: translateX(4px);
  }
  100% {

    transform: translateY(0);
  }
}
</style>
