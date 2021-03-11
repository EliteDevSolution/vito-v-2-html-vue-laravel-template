export default {
  listAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('listCommit', payload)
      resolve()
    })
  },
  videoCallAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('videoCallCommit', payload)
      resolve()
    })
  }
}
