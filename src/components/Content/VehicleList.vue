<template>
  <div :class="$style.carListWrapper">
    <transition name="heading" appear>
      <h2>{{ vehiclesFoundText }}</h2>
    </transition>
    <transition-group tag="div" name="vehicles" appear mode="out-in">
      <VehicleRow v-for="vehicle in filteredVehicles"
                  :key="vehicle.id"
                  :vehicle=vehicle></VehicleRow>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VehicleRow from './VehicleList/VehicleRow.vue';

export default {
  name: 'VehicleList',
  components: {
    VehicleRow,
  },
  created() {
    this.getData();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['vehicles', 'searchSpecs', 'searchVin']),
    filteredVehicles() {
      let vehiclesToDisplay;
      if (this.searchSpecs === '' && this.searchVin === '') {
        vehiclesToDisplay = [...this.vehicles];
      } else if (this.searchSpecs !== '' && this.searchVin === '') {
        vehiclesToDisplay = this.searchVehicleBySpecs();
      } else if (this.searchSpecs === '' && this.searchVin !== '') {
        vehiclesToDisplay = this.searchVehicleByVin();
      } else {
        vehiclesToDisplay = this.searchVehicleByVin(this.searchVehicleBySpecs());
      }
      return vehiclesToDisplay;
    },
    vehiclesFoundText() {
      let text = '';
      if (this.filteredVehicles.length !== 0) {
        text = 'AVAILABLE CARS';
      } else {
        text = 'It looks like no cars were found!';
      }
      return text;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
    searchVehicleBySpecs() {
      const searchReg = new RegExp(this.searchSpecs, 'i');
      return this.vehicles.filter(({
        manufacturer,
        model,
        engineDisplacement,
        transmissionType,
        modelYear,
        countryCode,
        color,
      }) => {
        return [manufacturer, `${manufacturer} ${model}`, model, engineDisplacement,
          transmissionType, modelYear, countryCode, color]
          .some(el => searchReg.test(el));
      });
    },
    searchVehicleByVin(vehicles = this.vehicles) {
      const searchReg = new RegExp(this.searchVin, 'i');
      return vehicles.filter(({
        vin,
        registrationPlate,
      }) => {
        return [vin, registrationPlate].some(el => searchReg.test(el));
      });
    },
  },
};
</script>

<style module>
.carListWrapper {
  position: relative;
  padding: 1em 0;
  background-color: #b7ff67;
  background-image: url("../../assets/grass-texture.png");
}

.carListWrapper h2,
.carListWrapper h4 {
  text-align: center;
  font-size: 2em;
  color: #dddddd;
  filter: drop-shadow(0px 0px 15px #000);
}
</style>

<style>
.vehicles-enter-from,
.vehicles-leave-to {
  opacity: 0;
}

.vehicles-enter-to,
.vehicles-leave-from {
  opacity: 1;
}

.vehicles-enter-active {
  transition: all 0.5s;
}

.vehicles-leave-active {
  transition: all 0.8s ease;
  position: absolute;
}

.vehicles-move {
  transition: all 0.8s ease;
}

.heading-enter-to,
.heading-leave-from {
  animation: headingAppear 0.8s;
}

@keyframes headingAppear {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  60% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
