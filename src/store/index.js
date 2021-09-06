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
      fuelType: '',
      engineDisplacement: '',
      transmissionType: '',
      modelYear: '',
      vin: '',
      countryCode: '',
      registrationPlate: '',
      color: '',
      imageLink: '',
    },
    showSuccessPopup: false,
    showErrorPopup: false,
    successPopupText: '',
    errorPopupText: '',
    lastVehicleId: 0,
    searchSpecs: '',
    searchVin: '',
  },
  getters: {},
  mutations: {
    getData(state) {
      return axios.get(API_PATH)
        .then(r => {
          state.vehicles = r.data;
          state.lastVehicleId = parseInt(r.data[r.data.length - 1].id, 10);
          return r;
        })
        .catch(err => {
          console.log('getData', err);
          return err;
        });
    },
    deleteVehicleFromList(state) {
      const url = `${API_PATH}/${state.vehicleToModify.id}`;
      console.log(url);
      return axios.delete(url)
        .then(() => {
          // console.log(r);
        })
        .catch(console.log);
    },
    toggleAdd: (state) => {
      state.showAddModal = !state.showAddModal;
    },
    closeEdit: (state) => {
      state.showEditModal = false;
    },
    toggleEdit: (state) => {
      state.showEditModal = !state.showEditModal;
    },
    toggleDelete: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
    setVehicleToModify: (state, payload) => {
      state.vehicleToModify = payload;
    },
    setSearchSpecs: (state, payload) => {
      state.searchSpecs = payload;
    },
    setSearchVin: (state, payload) => {
      state.searchVin = payload;
    },
    setLastVehicleId: (state) => {
      state.lastVehicleId = state.vehicles[state.vehicles.length - 1].id;
    },
    sortVehiclesAscending: (state, payload) => {
      state.vehicles.sort((a, b) => {
        return a[payload] > b[payload] ? 1 : -1;
      });
    },
    sortVehiclesDescending: (state, payload) => {
      state.vehicles.sort((a, b) => {
        return a[payload] > b[payload] ? -1 : 1;
      });
    },
    showSuccess: (state, payload) => {
      state.showSuccessPopup = true;
      setTimeout(() => {
        state.showSuccessPopup = false;
      }, 3000);
      state.successPopupText = payload;
    },
    showError: (state, payload) => {
      state.showErrorPopup = true;
      setTimeout(() => {
        state.showErrorPopup = false;
      }, 3000);
      state.errorPopupText = payload;
    },
  },
  actions: {
    getData: ({ commit }) => {
      commit('getData');
    },
    showSuccess: ({ commit }, payload) => {
      commit('showSuccess', payload);
    },
    showError: ({ commit }, payload) => {
      commit('showError', payload);
    },

    // getData: ({
    //   dispatch,
    //   commit,
    // }) => {

    //   dispatch('setVehicles')
    /**   ^^^^^ return ?? */
    //     .then((obj) => {
    //       console.log('err', obj);
    /**                         ^^^ undefined ??  */
    //       commit('showError', 'There was an error retrieving vehicles! Please, try again later');
    //     });
    // },
    setVehicleToModify: ({ commit }, payload) => {
      commit('setVehicleToModify', payload);
    },

    // async ??
    // async deleteVehicleFromList({ commit }) {
    //   await commit('deleteVehicleFromList');
    //   console.log('vehicle deleted');
    // },
    // async deleteVehicle({ dispatch }) {
    //   await dispatch('deleteVehicleFromList');
    //   await dispatch('getData');
    // },

  },
});
