import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  navTicket: false,
  numberOfTicket: 0,
  sidebarTicket: false
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
