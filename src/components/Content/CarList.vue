<template>
  <div :class="$style.carListWrapper">
    <h4>Available cars</h4>
    <div>
      <CarRow v-for="vehicle in this.$store.state.vehicles"
              :key="vehicle.id"
              :vehicle=vehicle></CarRow>
    </div>
  </div>
</template>

<script>
import CarRow from './CarList/CarRow.vue';

export default {
  name: 'CarList',
  components: {
    CarRow
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

.carListWrapper h4 {
  text-align: center;
}
</style>
