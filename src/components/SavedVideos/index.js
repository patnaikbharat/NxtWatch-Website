import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {RiPlayListAddFill} from 'react-icons/ri'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import {
  AppContainer,
  SidebarContainer,
  SavedVideosContainer,
  SavedVideosHeaderContainer,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedVideosVideosContainer,
  SavedVideosFlexContainer,
  SavedVideosVideoThumbnail,
  SavedVideosVideoTitle,
  SavedVideosVideoInfo,
  SavedVideosTextFlexContainer,
  SavedVideosVideoSMInfoContainer,
  SavedVideosVideoLGInfoContainer,
  SavedVideosSMFlexContainer,
  SavedVideosVideoChannelLogo,
  SavedVideosNoVideosContainer,
  SavedVideosNoVideosImage,
  SavedVideosNoVideosHeading,
  SavedVideosNoVideosPara,
} from './styledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideosList, isDarkMode} = value

          return (
            <>
              <Header />
              <AppContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                {savedVideosList.length > 0 ? (
                  <SavedVideosContainer
                    data-testid="savedVideos"
                    isDarkMode={isDarkMode}
                  >
                    <SavedVideosHeaderContainer isDarkMode={isDarkMode}>
                      <SavedVideosLogoContainer isDarkMode={isDarkMode}>
                        <RiPlayListAddFill size={40} color="#ff0b37" />
                      </SavedVideosLogoContainer>
                      <SavedVideosHeading isDarkMode={isDarkMode}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedVideosHeaderContainer>
                    <SavedVideosVideosContainer>
                      {savedVideosList.map(eachVideo => (
                        <Link
                          to={`/videos/${eachVideo.id}`}
                          className="video-link"
                          key="eachVideo.id"
                        >
                          <SavedVideosFlexContainer key="eachVideo.id">
                            <SavedVideosVideoThumbnail
                              src={eachVideo.thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <SavedVideosVideoLGInfoContainer>
                              <SavedVideosVideoTitle isDarkMode={isDarkMode}>
                                {eachVideo.title}
                              </SavedVideosVideoTitle>
                              <SavedVideosVideoInfo isDarkMode={isDarkMode}>
                                {eachVideo.channelName}
                              </SavedVideosVideoInfo>
                              <SavedVideosTextFlexContainer>
                                <SavedVideosVideoInfo isDarkMode={isDarkMode}>
                                  {eachVideo.viewCount} views
                                </SavedVideosVideoInfo>
                                <SavedVideosVideoInfo isDarkMode={isDarkMode}>
                                  -
                                </SavedVideosVideoInfo>
                                <SavedVideosVideoInfo isDarkMode={isDarkMode}>
                                  {formatDistanceToNow(
                                    new Date(eachVideo.publishedAt),
                                  )}{' '}
                                  ago
                                </SavedVideosVideoInfo>
                              </SavedVideosTextFlexContainer>
                            </SavedVideosVideoLGInfoContainer>
                            <SavedVideosVideoSMInfoContainer>
                              <SavedVideosSMFlexContainer>
                                <SavedVideosVideoChannelLogo
                                  src={eachVideo.channelProfileImageUrl}
                                  alt="channel logo"
                                />
                                <div>
                                  <SavedVideosVideoTitle
                                    isDarkMode={isDarkMode}
                                  >
                                    {eachVideo.title}
                                  </SavedVideosVideoTitle>
                                  <SavedVideosVideoInfo isDarkMode={isDarkMode}>
                                    {eachVideo.channelName}
                                  </SavedVideosVideoInfo>
                                  <SavedVideosTextFlexContainer>
                                    <SavedVideosVideoInfo
                                      isDarkMode={isDarkMode}
                                    >
                                      {eachVideo.viewCount} views
                                    </SavedVideosVideoInfo>
                                    <SavedVideosVideoInfo
                                      isDarkMode={isDarkMode}
                                    >
                                      -
                                    </SavedVideosVideoInfo>
                                    <SavedVideosVideoInfo
                                      isDarkMode={isDarkMode}
                                    >
                                      {formatDistanceToNow(
                                        new Date(eachVideo.publishedAt),
                                      )}{' '}
                                      ago
                                    </SavedVideosVideoInfo>
                                  </SavedVideosTextFlexContainer>
                                </div>
                              </SavedVideosSMFlexContainer>
                            </SavedVideosVideoSMInfoContainer>
                          </SavedVideosFlexContainer>
                        </Link>
                      ))}
                    </SavedVideosVideosContainer>
                  </SavedVideosContainer>
                ) : (
                  <SavedVideosNoVideosContainer isDarkMode={isDarkMode}>
                    <SavedVideosNoVideosImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <SavedVideosNoVideosHeading isDarkMode={isDarkMode}>
                      No saved videos found
                    </SavedVideosNoVideosHeading>
                    <SavedVideosNoVideosPara isDarkMode={isDarkMode}>
                      You can save your videos while watching them
                    </SavedVideosNoVideosPara>
                  </SavedVideosNoVideosContainer>
                )}
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
