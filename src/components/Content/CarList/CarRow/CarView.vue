<template>
  <div :class="$style.carView">
    <h3> {{ vehicleFullName }} </h3>
    <img
      :src="imageLink"
      :alt="vehicleFullName"
      :title="vehicleFullName">
  </div>
</template>

<script>
export default {
  name: 'CarView',
  props: {
    imageLink: String,
    vehicleFullName: String,
  }
};
</script>

<style module>

.carView {
  position: relative;
  display: flex;
  align-items: center;
  width: 32vw;
  height: 18vw;
  padding: 0.4em 0;
}

.carView h3 {
  position: absolute;
  top: 0;
  left: 0.2em;
  background-color: #00000088;
  padding: 0.5em 1em;
  border-radius: 16px;
  z-index: 2;
}

.carView img {
  border-radius: 1em;
  filter: drop-shadow(4px 4px 4px #00000080);
  height: 94%;
  margin: 1em 0;
  object-fit: cover;
  -webkit-user-drag: none;
}
</style>
