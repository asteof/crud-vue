<template>
  <Header></Header>
  <Content></Content>
  <DeleteModal
    v-show="this.$store.state.showDeleteModal"/>
  <Footer></Footer>
</template>

<script>
import Content from './components/Content.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import DeleteModal from './components/Content/Modals/DeleteModal.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    DeleteModal,
  },
  data() {
    return {
      // showEditModal: this.$store.showEditModal,
      // showDeleteModal: this.$store.showDeleteModal,
    };
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
