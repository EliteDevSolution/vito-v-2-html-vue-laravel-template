export default {
  horizontalMenuState: state => state.horizontalMenu,
  miniSidebarState: state => state.miniSidebarMenu,
  authUserState: state => state.authUser,
  usersState: state => state.users,
  activePage: state => state.activePage,
  langState: state => state.lang,
  globalSearchState: state => state.globalSearch,
  bookmarkState: state => state.bookmark,
  langOptionState: state => state.langOption,
  colorState: state => state.colors,
  darkModeState: state => state.layoutMode.dark,
  rtlModeState: state => state.layoutMode.rtl
}
