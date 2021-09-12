import axios from 'axios';
import { createStore } from 'vuex';

type RandomUser = {
    name: {
        first: string;
        last: string;
    };
};

export default createStore({
    state: {
        money: 10,
        random_user_name: ''
    },

    getters: {
        getRandomUserName: state => state.random_user_name
    },

    actions: {
        async fetchUser({ commit }) {
            const response = await axios.get('https://randomuser.me/api/');
            const user: RandomUser = response.data.results[0];
            const fullname = `${user.name.first} ${user.name.last}`;

            commit('SET_RANDOM_USER_NAME', fullname);
        }
    },

    mutations: {
        SET_RANDOM_USER_NAME(state, fullname) {
            state.random_user_name = fullname;
        }
    }
});
