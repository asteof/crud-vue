<template>
  <Header/>
  <Content/>
  <Modals/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Modals from './components/Modals.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Modals,
    Footer,
  },
};

</script>

<style lang="scss">
//#app {
//
//  text-align: center;
//  color: #2c3e50;
//  margin-top: 60px;
//}

</style>
