import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    users: [
      {userId: 0, username: 'john doe', fullName: 'John Doe', address: 'Street 01, CA'},
      {userId: 1, username: 'patric', fullName: 'Patric D', address: 'Street 32, DF'},
      {userId: 2, username: 'david', fullName: 'David Beam', address: 'Street 91, JO'},
    ],
    userId: '',
    username: '',
    fullName: '',
    address: ''
  },
  getters: {
    users : state => {
      return state.users
    },
    userId: state => {
      return state.userId;
    },
    username: state => {
      return state.username;
    },
    fullName: state => {
      return state.fullName;
    },
    address: state => {
      return state.address;
    }
  },
  mutations: {
    userAdd(state) {
      state.users.push({userId: state.userId, username: state.username, fullName: state.fullName, address: state.address});
      state.userId = "";
      state.username = "";
      state.fullName = "";
      state.address = "";
    },
    SET_USER_ID(state, payload) {
      state.userId = payload
    },
    USERNAME(state, payload) {
      state.username = payload
    },
    FULL_NAME(state, payload) {
      state.fullName = payload
    },
    ADDRESS(state, payload) {
      state.address = payload
    },
    DELETE_USER(state, index) {
      state.users.splice(index, 1)
    }
  }


});