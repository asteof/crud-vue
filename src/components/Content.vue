<template>
  <main>
    <Controls></Controls>
    <VehicleList></VehicleList>
  </main>
</template>

<script>
import VehicleList from './Content/VehicleList.vue';
import Controls from './Content/Controls.vue';

export default {
  name: 'Main',
  components: {
    VehicleList,
    Controls,
  },
};
</script>

<style scoped>

</style>
