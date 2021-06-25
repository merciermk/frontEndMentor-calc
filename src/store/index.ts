import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    vueXUserInput: '0'
  },

  mutations: {
    addToArray (state, input) {
      if (state.vueXUserInput === '0') {
        state.vueXUserInput = input
      } else {
        state.vueXUserInput += input
      }
    },
    deleteLastInArray (state) {
      state.vueXUserInput = state.vueXUserInput.substr(0, state.vueXUserInput.length - 1)
    },
    eval (state) {
      /* eslint no-eval: 0 */
      const tampon = eval(state.vueXUserInput)
      state.vueXUserInput = tampon.toString()
    },
    deleteAll (state) {
      state.vueXUserInput = '0'
    }
  },

  actions: {
    deleteActions ({ commit }) {
      commit('deleteLastInArray')
    },
    addLastInput ({ commit }, input) {
      console.log(input)
      commit('addToArray', input)
    },
    result ({ commit }) {
      commit('eval')
    },
    resetAll ({ commit }) {
      commit('deleteAll')
    }
  },

  getters: {
    affichage (state) {
      return state.vueXUserInput
    }
  }
})
