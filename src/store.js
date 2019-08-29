import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	menuOpen: false
}

const getters = {
	menuState() {
		return state.menuOpen
	}
}
const mutations = {
	set_menuState(state, payload) {
		state.menuOpen = payload
	}
}
const actions = {
	change_menuState(context) {
		context.commit('set_menuState', !context.state.menuOpen)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
