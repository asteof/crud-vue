<template>
  <div :class="$style.controlsWrap">

    <section>
      <label for="search-specs">General search</label>
      <input type="text"
             placeholder="Ford Focus"
             id="search-specs"
             v-model="searchSpecs">
    </section>

    <section>
      <label for="search-vin">Search by VIN</label>
      <input type="text"
             placeholder="1FADP3F29HL317914"
             id="search-vin"
             v-model="searchVin">
    </section>

    <section>

      <label for="sort">Sort by</label>
      <div>
          <label for="sort-direction">{{ sortSymbol }}</label>
        <input type="checkbox"
               v-model="isDescending"
               id="sort-direction">
        <select id="sort"
                @input="sortVehicles($event.target.value)">
          Sort
          <option value="">None</option>
          <option value="createdAt">Creation time</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="model">Model</option>
          <option value="fuelType">Fuel type</option>
          <option value="engineDisplacement">Engine displacement</option>
          <option value="transmissionType">Transmission type</option>
          <option value="modelYear">Model year</option>
          <option value="countryCode">Country code</option>
          <option value="color">Color</option>
        </select>
      </div>
    </section>

    <div>
      <button :class="$style.addCarBtn" @click="openAddModal">
        Add new car
        <img :class="$style.icon" src="../../assets/plus.svg" alt="+">
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Controls',
  data() {
    return {
      isDescending: false,
      sortSymbol: '▲',
      lastSortingOption: '',
    };
  },
  methods: {
    openAddModal() {
      this.$store.commit('toggleAdd');
    },
    sortVehicles(sortOption) {
      sortOption === '' ? sortOption = 'id' : sortOption;
      this.lastSortingOption = sortOption;
      if (this.isDescending) {
        this.$store.commit('sortVehiclesDescending', sortOption);
      } else {
        this.$store.commit('sortVehiclesAscending', sortOption);
      }
    },
  },
  computed: {
    searchSpecs: {
      get() {
        return this.$store.state.searchSpecs;
      },
      set(value) {
        this.$store.commit('setSearchSpecs', value);
      },
    },
    searchVin: {
      get() {
        return this.$store.state.searchVin;
      },
      set(value) {
        this.$store.commit('setSearchVin', value);
      },
    },
  },
  watch: {
    isDescending: {
      handler() {
        this.isDescending ? this.sortSymbol = '▼' : this.sortSymbol = '▲';
        this.sortVehicles(this.lastSortingOption);
      },
      immediate: true,
    },
  },
};
</script>

<style module>
.controlsWrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5em;
  background-color: #b7ff67;
  background-image: linear-gradient(to bottom, #5d8a27 1%, #b7ff67 3% 96%, #5d8a27);
}

.controlsWrap section {
  display: flex;
  flex-direction: column;
}

.controlsWrap input::placeholder {
  color: #0f9a00;
}

.controlsWrap section div {
  display: flex;
  align-items: flex-end;
}

label[for='sort-direction'] {
  font-size: 1.2em;
  cursor: pointer;
  user-select: none;
}

.controlsWrap input[type='checkbox'] {
  display: none;
}

.controlsWrap select {
  font-size: 0.9em;
  padding: 0.4em 0;
  border: 2px solid #b7ff67;
  border-bottom: 2px solid #000000;
}

.controlsWrap select option {
  background: #d7ff92;
}

.addCarBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  background-color: #26262630;
  border-radius: 0.5em;
  padding: 0.4em 1.3em;
}

.addCarBtn:hover {
  background-color: #26262640;
}

.addCarBtn:active {
  background-color: #26262620;
}

.icon {
  width: 1.2em;
  margin: 0 0 0 0.5em;
}

</style>

