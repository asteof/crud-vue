<template>
  <button :class="$style.closeBtn"
          @click="closeModal">
    <img src="../../../assets/close.svg" alt="X">
  </button>
</template>

<script>
export default {
  name: 'CloseBtn',
  props: {
    closeModal: Function,
  },
};
</script>

<style module>
.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  height: 3em;
  opacity: 0.4;
  margin: 0.3em 0;
}

.closeBtn:hover {
  opacity: 0.8;
}
</style>
