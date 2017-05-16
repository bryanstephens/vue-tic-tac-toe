import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    game: game
  }
})

export default store
