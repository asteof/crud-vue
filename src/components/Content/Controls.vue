<template>
  <div :class="$style.controlsWrap">
    <div>
      <input type="text" placeholder="search">
    </div>

    <div>
      <button :class="$style.controlButton" @click="openAddModal">
        Add new car
        <img :class="$style.icon" src="../../assets/plus.svg" alt="+">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  methods: {
    openAddModal() {
      this.$store.commit('toggleAdd');
    }
  }
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
}

.controlButton {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  background-color: #26262630;
  border-radius: 0.5em;
  padding: 0.4em 1.3em;
}

.controlButton:hover {
  background-color: #26262640;
}

.controlButton:active {
  background-color: #26262620;
}

.icon {
  width: 1.2em;
  margin: 0 0 0 0.5em;
}


</style>
