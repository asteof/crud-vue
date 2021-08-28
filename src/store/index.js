import { createStore } from 'vuex';

export default createStore({
  state: {
    showEditModal: false,
    showDeleteModal: false,
    carToDelete: 0,
  },
  getters: {},
  mutations: {
    toggleEdit: (state) => {
      state.showEditModal = !state.showEditModal;
    },
    toggleDelete: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
    setCarToDelete: (state, payload) => {
      state.carToDelete = payload;
    },
  },
  actions: {},
  modules: {},
});
