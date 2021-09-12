import { createStore } from 'vuex';

export default createStore({
    state: {
        money: 10
    },
    actions: {
        increment({ commit }) {
            commit('INCREMENT_MONEY');
        },
        decrement({ commit }) {
            commit('DECREMENT_MONEY');
        }
    },
    mutations: {
        INCREMENT_MONEY(state) {
            state.money++;
        },
        DECREMENT_MONEY(state) {
            state.money--;
        }
    }
});
