export default {
  horizontalMenuCommit (state, data) {
    state.horizontalMenu = data
  },
  miniSidebarCommit (state, data) {
    state.miniSidebarMenu = data
  },
  authUserCommit (state, data) {
    state.authUser = data
  },
  addUserCommit (state, data) {
    state.users.push(data)
  },
  activePageCommit (state, data) {
    state.activePage = data
  },
  addBookmarkCommit (state, data) {
    state.bookmark.push(data)
  },
  removeBookmarkCommit (state, data) {
    const book = state.bookmark.findIndex(item => item.link.name === data.link.name)
    if (book !== -1) {
      state.bookmark.splice(book, 1)
    }
  },
  setLangCommit (state, data) {
    state.lang = data
  },
  layoutModeCommit (state, data) {
    state.layoutMode = data
  }
}
