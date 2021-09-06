<template>
  <div :class="$style.VehicleSpecs">
    <section>
      <p>Specs</p>
      <div>Model:</div>
      <div :class="$style.model">{{ vehicle.model }}</div>
      <div>Model year:</div>
      <div>{{ vehicle.modelYear }}</div>
      <div>Fuel type:</div>
      <div>{{ vehicle.fuelType }}</div>
      <div>Engine displacement:</div>
      <div>{{ vehicle.engineDisplacement }}</div>
      <div>Transmission type:</div>
      <div>{{ vehicle.transmissionType }}</div>
    </section>

    <section >
      <p>Legal info</p>
      <div>Country code:</div>
      <div :class="$style.countryCode">
        {{ vehicle.countryCode }}
        <img :src="`https://www.countryflags.io/${vehicle.countryCode}/flat/64.png`"
             :alt="vehicle.countryCode">
      </div>
      <div>Dealership:</div>
      <div>{{ vehicle.manufacturer }} {{ vehicle.countryCode }}</div>
      <div>VIN:</div>
      <div :class="$style.copyItem">
        {{ vehicle.vin }}
        <img :class="$style.icon" src="../../../../assets/copy.svg" alt="Copy" title="Copy">
      </div>
      <div>Registration plate:</div>
      <div :class="$style.copyItem">
        {{ vehicle.registrationPlate }}
        <img :class="$style.icon" src="../../../../assets/copy.svg" alt="Copy" title="Copy">
      </div>
      <div>Color:</div>
      <div :class="$style.carColor">
        {{ vehicle.color }}
        <div :style="{backgroundColor: vehicle.color}"></div>
      </div>
    </section>

    <VehicleControls :vehicle="vehicle"/>
  </div>

</template>

<script>
import VehicleControls from './VehicleControls.vue';

export default {
  name: 'VehicleSpecs',
  components: {
    VehicleControls,
  },
  props: {
    vehicle: Object,
  },
};
</script>

<style module>
.VehicleSpecs {
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 0.9em;
  gap: 4em;
  padding: 1.5em;
  margin: 1em 0;
  border-radius: 16px;
  background-color: #363636da;
}

.VehicleSpecs section {
  display: grid;
  grid-template-columns: 1fr 0fr;
  column-gap: 3em;
  box-sizing: border-box;
  height: 100%;
}

.VehicleSpecs section p {
  font-size: 1.1em;
  font-weight: 600;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #dddddd 60%, #dddddd00) 1;
}

.VehicleSpecs section div:nth-of-type(n) {
  grid-column: 1/2;
}

.VehicleSpecs section div:nth-of-type(2n) {
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
}

.VehicleSpecs section div {
  display: flex;
  justify-content: space-between;
  line-height: 1.8em;
  height: 1.8em;
}

.countryCode,
.carColor,
.copyItem {
  display: flex;
  align-items: center;
}

.countryCode img {
  width: 2em;
  height: auto;
  margin: 0 0 0 0.5em;
}

.model {
  width: 6em;
  overflow: hidden;
}

.VehicleSpecs .carColor div {
  width: 1em;
  height: 1em;
  margin: 0 0 0 0.5em;
  border: 2px solid #000000;
  border-radius: 4px;
}

.icon {
  width: 1em;
  height: auto;
  margin: 0 0 0 0.5em;
  opacity: 0.4;
}

.icon:hover {
  opacity: 0.8;
}

.icon:active {
  opacity: 1;
}
</style>
