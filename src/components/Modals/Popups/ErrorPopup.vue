<template>
  <div class="modalWrap">
    <div :class="$style.error" class="popup">
      {{ this.$store.state.errorPopupText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPopup',
};
</script>

<style module>
.error {
  background-color: #ff9292;
}
</style>
