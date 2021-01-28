import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
 car:null,hotel:null
 ,event:null
},
  mutations: {
    setCar(state,car) {
        state.car = car
    },
    setHotel(state,hotel) {
        state.hotel = hotel
    }
  },
  actions:{

  },
  getters: {}
})
export default store