import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import PreventRoute from './components/PreventRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import NxtWatchContext from './components/NxtWatchContext'
import './App.css'

class App extends Component {
  state = {isDarkMode: false, activeTab: 'HOME', savedVideosList: []}

  onClickTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onChangeActiveTab = item => {
    this.setState({activeTab: item})
  }

  addToSaveVideos = videoDetails => {
    const {savedVideosList} = this.state
    const isPresent = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (isPresent) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList],
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  removeToSaveVideos = id => {
    const {savedVideosList} = this.state
    const filterVideos = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosList: filterVideos})
  }

  render() {
    const {isDarkMode, activeTab, savedVideosList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          onClickTheme: this.onClickTheme,
          activeTab,
          onChangeActiveTab: this.onChangeActiveTab,
          savedVideosList,
          addToSaveVideos: this.addToSaveVideos,
          removeToSaveVideos: this.removeToSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <PreventRoute exact path="/" component={Home} />
          <PreventRoute exact path="/trending" component={Trending} />
          <PreventRoute exact path="/gaming" component={Gaming} />
          <PreventRoute exact path="/saved-videos" component={SavedVideos} />
          <PreventRoute exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
