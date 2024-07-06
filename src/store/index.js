import { createStore } from 'vuex';

export default createStore({
  state: {
    name: '',
    score: 0,
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setScore(state, score) {
      state.score = score;
    },
  },
  actions: {},
  modules: {},
});
