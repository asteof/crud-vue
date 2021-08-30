<template>
  <Header></Header>
  <Content></Content>

  <AddVehicleModal v-show="this.$store.state.showAddModal"/>
  <EditVehicleModal v-show="this.$store.state.showEditModal"/>
  <DeleteVehicleModal v-show="this.$store.state.showDeleteModal"/>
  <Footer></Footer>
</template>

<script>
import Content from './components/Content.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AddVehicleModal from './components/Content/Modals/AddVehicleModal.vue';
import EditVehicleModal from './components/Content/Modals/EditVehicleModal.vue';
import DeleteVehicleModal from './components/Content/Modals/DeleteVehicleModal.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    AddVehicleModal,
    EditVehicleModal,
    DeleteVehicleModal,
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
