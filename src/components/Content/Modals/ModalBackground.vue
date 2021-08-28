<template>
  <div :class="$style.background"></div>
</template>

<script>
export default {
  name: 'ModalBackground'
};
</script>

<style module>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #26262669;
  z-index: 2;
}
</style>
