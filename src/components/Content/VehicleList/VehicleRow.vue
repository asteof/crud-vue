<template>
  <div :class="$style.row">
      <VehicleAppearance :image-link="image"
                         :time-add="timeAdd"
                         :vehicle-full-name="vehicleFullName"/>
    <VehicleSpecs :vehicle="vehicle"/>
  </div>
</template>

<script>
import { parseDate } from '../../../utils/helpers';
import * as defaultImage from '../../../assets/logo.png';
import VehicleAppearance from './VehicleRow/VehicleAppearance.vue';
import VehicleSpecs from './VehicleRow/VehicleSpecs.vue';

export default {
  name: 'VehicleRow',
  components: {
    VehicleAppearance,
    VehicleSpecs,
  },
  props: {
    vehicle: Object,
  },
  computed: {
    vehicleFullName() {
      return `${this.vehicle.manufacturer} ${this.vehicle.model}`;
    },
    timeAdd() {
      const date = new Date(this.vehicle.createdAt);
      return parseDate(date);
    },
    image() {
      return this.vehicle.imageLink === '' ? defaultImage : this.vehicle.imageLink;
    },
  },
};
</script>

<style module>
.row {
  display: flex;
  justify-content: space-between;
  background-color: #3d3b3b;
  background-image: url("../../../assets/road3.png");
  background-size: contain;
  color: #dddddd;
  margin: 4.8em 0;
  padding: 1.4em;
  filter: drop-shadow(0px 0px 4px #000);
}

.row:first-child {
  margin: 2em 0 4em 0;
  transition: all 0.1s;
}
</style>
