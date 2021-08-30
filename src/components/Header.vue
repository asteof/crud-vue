<template>
  <header>
    <div :class="$style.logoWrap">
      <img :class="$style.logo" src="../assets/logo.png" alt="logo">
    </div>
    <h2>Brick-Car Factory</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style module>

.logoWrap {
  margin: 0 4em 0 1em;
  height: calc(20vh - 1.6em);
}

.logo {
  height: inherit;
  -webkit-user-drag: none;
  box-sizing: border-box;
}

</style>
