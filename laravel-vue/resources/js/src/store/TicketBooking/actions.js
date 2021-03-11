export default {
  displayNavTicket (context, payload) {
    context.commit('displayNavTicket', payload)
  },
  displaySidebarTicket (context, payload) {
    context.commit('displaySidebarTicket', payload)
  },
  resetTicket (context, payload) {
    context.commit('updateNumberOfTicket', 0)
  },
  addTicket (context, payload) {
    let count = payload + 1
    context.commit('updateNumberOfTicket', count)
  },
  removeTicket (context, payload) {
    let count
    if (payload > 0) {
      count = payload - 1
    }
    if (count === 0) {
      context.commit('displaySidebarTicket', false)
    }
    context.commit('updateNumberOfTicket', count)
  }
}
