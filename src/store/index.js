import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authToken: Cookies.get('authToken') || ''
  },
  mutations: {

  },
  actions: {
    
  }
});

export default store;