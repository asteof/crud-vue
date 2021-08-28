<template>
  <div :class="$style.carListWrapper">
    <h4>Available cars</h4>
    <div>
      <CarRow v-for="vehicle in vehicles"
              :key="vehicle.id"
              :vehicle=vehicle></CarRow>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CarRow from './CarList/CarRow.vue';

const url = 'http://localhost:3000/vehicles';

export default {
  name: 'CarList',
  components: {
    CarRow
  },
  created() {
    this.getData();
  },
  data() {
    return {
      vehicles: [],
    };
  },

  methods: {
    getData() {
      axios.get(url)
        .then(r => {
          this.vehicles = r.data;
          // console.log(this.vehicles);
        })
        .catch(console.log);
    },
  },
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
