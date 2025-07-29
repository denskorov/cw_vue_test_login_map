import {createStore} from 'vuex'

const store = createStore({
    state: () => ({
        markers: []
    }),
    mutations: {
        addMarker: (state, marker) => state.markers = [...state.markers, marker],
        // addMarker: (state, marker) => {state.markers.push(marker)}
        setMarkers: (state, markers) => state.markers = markers,
    },
    getters: {},
    actions: {
        // eslint-disable-next-line no-unused-vars
        addMarker({commit, dispatch}, marker) {
            commit('addMarker', marker);

            // dispatch('updateLocalStorage')
        },
        // eslint-disable-next-line no-unused-vars
        removeMarker({state, dispatch}, index) {
            state.markers.splice(index, 1);
            // dispatch('updateLocalStorage')
        },
        updateLocalStorage({state}) {
            localStorage.setItem('markers', JSON.stringify(state.markers));
        },
        getMarkersFromLocalStorage({commit}) {
            commit('setMarkers', JSON.parse(localStorage.getItem('markers')) || []);
        }
    },
})

export default store