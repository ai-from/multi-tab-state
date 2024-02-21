export const state = () => ({
	coords: {x: 0, y: 0}
})

export const getters = {
	getCoords(state) {
		return state.coords
	}
}

export const mutations = {
	setCoords(state, payload) {
		state.coords = {...payload}
	}
}