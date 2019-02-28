   
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isUploaded:false,
    },
    mutations: {
        setStatus(state, status) {
            state.isUploaded = status;
        }
    },
    actions: {
        setStatus({ commit },status){
            commit('setStatus',status);
        },
    }
})
export default store;
