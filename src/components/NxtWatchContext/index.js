import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  onClickTheme: () => {},
  activeTab: 'HOME',
  onChangeActiveTab: () => {},
  savedVideosList: [],
  addToSaveVideos: () => {},
  removeToSaveVideos: () => {},
})

export default NxtWatchContext
