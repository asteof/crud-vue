<template>
  <main>
    <Controls></Controls>
    <CarList></CarList>
  </main>
</template>

<script>
import CarList from './Content/CarList.vue';
import Controls from './Content/Controls.vue';

export default {
  name: 'Main',
  components: {
    CarList,
    Controls,
  },
};
</script>

<style scoped>

</style>
