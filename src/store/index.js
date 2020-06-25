import Vue from 'vue'
import Vuex from 'vuex'

import movies from '@/data/movies'
import shows from '@/data/shows'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies,
    shows
  },
  mutations: {
    appendTitle: (state, { type, title }) => {
      state[type].push(title)
    }
  },
  actions: {
    addTitle: ({ commit }, payload) => {
      commit('appendTitle', payload)
    }
  },
  modules: {
  }
})
