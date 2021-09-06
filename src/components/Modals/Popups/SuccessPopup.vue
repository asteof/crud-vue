<template>
  <div class="modalWrap">
    <div :class="$style.success" class="popup">
      {{ this.$store.state.successPopupText  }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPopup',
};
</script>

<style module>
.success{
  font-weight: 600;
  background-color: #3da309;
}
</style>
