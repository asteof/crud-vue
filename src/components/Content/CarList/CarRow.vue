<template>
  <div :class="$style.row">
    <CarView :image-link="vehicle.image_link"
             :vehicle-full-name="vehicleFullName"/>
    <CarSpecs :vehicle="vehicle" @openDelete="openDelete"/>
  </div>
</template>

<script>
import CarView from './CarRow/CarView.vue';
import CarSpecs from './CarRow/CarSpecs.vue';

export default {
  name: 'CarRow',
  components: {
    CarView,
    CarSpecs,
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
</style>
