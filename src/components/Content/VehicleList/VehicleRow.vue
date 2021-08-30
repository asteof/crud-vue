<template>
  <div :class="$style.row">
    <VehicleAppearance :image-link="vehicle.image_link"
                       :vehicle-full-name="vehicleFullName"/>
    <VehicleSpecs :vehicle="vehicle" @openDelete="openDelete"/>
  </div>
</template>

<script>
import VehicleAppearance from './VehicleRow/VehicleAppearance.vue';
import VehicleSpecs from './VehicleRow/VehicleSpecs.vue';

export default {
  name: 'VehicleRow',
  components: {
    VehicleAppearance,
    VehicleSpecs,
  },
  methods: {
    openDelete() {
      console.log('dsdsadsa');
    },
  },
  props: {
    vehicle: Object,
  },
  computed: {
    vehicleFullName() {
      return `${this.vehicle.manufacturer} ${this.vehicle.model}`;
    }
  },
};
</script>

<style module>
.row {
  display: flex;
  justify-content: space-between;
  background-color: #3d3b3b;
  background-image: url("../../../assets/road2.png");
  background-size: contain;
  color: #dddddd;
  margin: 4em 0;
  padding: 1.4em;
}

.row:first-child {
  margin: 2em 0 4em 0;
}
</style>
