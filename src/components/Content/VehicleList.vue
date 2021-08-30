<template>
  <div :class="$style.carListWrapper">
    <h2>AVAILABLE CARS</h2>
    <div>
      <VehicleRow v-for="vehicle in this.$store.state.vehicles"
              :key="vehicle.id"
              :vehicle=vehicle></VehicleRow>
    </div>
  </div>
</template>

<script>
import VehicleRow from './VehicleList/VehicleRow.vue';

export default {
  name: 'VehicleList',
  components: {
    VehicleRow
  },
  created() {
    this.getData();
  },
  data() {
    return {};
  },
  computed: {
    // isCarListModified() {
    //   return this.$store.getters.getVehiclesLength;
    // }
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
  },
  watch: {
    // isCarListModified(newLength, oldLength) {
    //   if (newLength !== oldLength) {
    //     console.log(newLength, oldLength);
    //     console.log(this.$store.getters.getVehiclesLength);
    //   }
    // },

    /** ??
    // eslint-disable-next-line
    '$store.state.vehicles.length': function () {
      console.log(this.$store.state.vehicles.length);
      // this.getData();
    }
    /* */
  }
};
</script>

<style module>
.carListWrapper {
  padding: 1em 0;
  background-color: #b7ff67;
}

.carListWrapper h2 {
  text-align: center;
}
</style>
