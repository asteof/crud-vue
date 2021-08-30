<template>
  <div :class="$style.submitBtnWrap">
    <button type="button" @click="cancelMethod">
      Cancel
    </button>
    <button type="submit" @click="submitMethod">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalSubmitButtons',
  props: {
    cancelMethod: {
      type: Function,
      required: true,
    },
    submitMethod: Function
  }
};
</script>

<style module>
.submitBtnWrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.submitBtnWrap button {
  font-size: 1em;
  background-color: #26262630;
  border-radius: 0.5em;
  padding: 0.4em 1.8em;
}

.submitBtnWrap button:hover {
  background-color: #26262640;
}

.submitBtnWrap button:active {
  background-color: #26262620;
}

</style>
