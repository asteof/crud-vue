<template>
  <div :class="$style.controls">
    <button @click="openEditModal">
      <img src="../../../../assets/edit.svg" alt="Edit" title="Edit">
    </button>
    <button @click="openDeleteModal">
      <img src="../../../../assets/delete.svg" alt="Delete" title="Delete">
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CarControls',
  props: {
    vehicle: Object
  },
  methods: {
    ...mapMutations(['toggleEdit', 'toggleDelete', 'setVehicleToDelete']),
    openEditModal() {
      this.toggleEdit();
    },
    openDeleteModal() {
      this.toggleDelete();
      this.setVehicleToDelete({
        id: this.vehicle.id,
        vehicleFullName: this.vehicleFullName
      });
    },
  },
  computed: {
    vehicleFullName() {
      return `${this.vehicle.manufacturer} ${this.vehicle.model}`;
    }
  }
};
</script>

<style module>
.controls {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  padding: 0.4em 1.8em;
  background-color: #26262680;
  border-radius: 1em 1em 0 1em;
}

.controls button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0;
  border-radius: 1em;
  padding: 1em;
  margin: 0 0.2em;
  width: 4em;
  height: 4em;
}

.controls img {
  width: 100%;
  height: 100%;
  opacity: 0.7;
}

.controls button:hover {
  background-color: #22222298;
}

.controls button:hover img {
  opacity: 1;
}
</style>
