import { createStore } from 'vuex';
import axios from 'axios';
import { API_PATH } from '../utils/constants';

export default createStore({
  state: {
    vehicles: [],
    showAddModal: false,
    showEditModal: false,
    showDeleteModal: false,
    vehicleToModify: {
      id: 0,
      createdAt: '',
      manufacturer: '',
      model: '',
      fuel_type: '',
      engine_displacement: '',
      transmission_type: '',
      model_year: '',
      vin: '',
      country_code: '',
      registration_plate: '',
      color: '',
      image_link: ''
    },
  },
  getters: {
    getVehiclesLength(state) {
      return state.vehicles.length;
    },
  },
  mutations: {
    getData(state) {
      axios.get(API_PATH)
        .then(r => {
          state.vehicles = r.data;
        })
        .catch(err => console.log('getData', err));
    },
    deleteVehicleFromList(state) {
      const url = `${API_PATH}/vehicles/${state.vehicleToModify.id}`;
      axios.delete(url)
        .then(r => {
          console.log(r);
        })
        .catch(console.log);
    },
    toggleEdit: (state) => {
      state.showEditModal = !state.showEditModal;
    },
    toggleAdd: (state) => {
      state.showAddModal = !state.showAddModal;
    },
    toggleDelete: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
    setVehicleToModify: (state, payload) => {
      state.vehicleToModify = payload;
    }
  },
  actions: {
    // async ??
    getData: ({ commit }) => {
      commit('getData');
    },
    setVehicleToModify: ({ commit }, payload) => {
      commit('setVehicleToModify', payload);
    }

    // async deleteVehicleFromList({ commit }) {
    //   await commit('deleteVehicleFromList');
    //   console.log('vehicle deleted');
    // },
    // async deleteVehicle({ dispatch }) {
    //   await dispatch('deleteVehicleFromList');
    //   await dispatch('getData');
    // },

  },
  modules: {},
});
