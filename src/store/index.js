import { createStore } from 'vuex';
import axios from 'axios';
import { API_PATH } from '../utils/constants';

export default createStore({
  state: {
    vehicles: [],
    showEditModal: false,
    showDeleteModal: false,
    vehicleToDelete: {
      id: 0,
      vehicleFullName: ''
    },

  },
  getters: {
    getVehiclesLength(state) {
      return state.vehicles.length;
    }
  },
  mutations: {
    getData(state) {
      const url = `${API_PATH}/vehicles`;
      axios.get(url)
        .then(r => {
          state.vehicles = r.data;
        })
        .catch(err => console.log('getData', err));
    },
    toggleEdit: (state) => {
      state.showEditModal = !state.showEditModal;
    },
    toggleDelete: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
    setVehicleToDelete: (state, payload) => {
      state.vehicleToDelete.id = payload.id;
      state.vehicleToDelete.vehicleFullName = payload.vehicleFullName;
    }
  },
  actions: {
    // async ??
    getData: ({ commit }) => {
      commit('getData');
    }

  },
  modules: {},
});
