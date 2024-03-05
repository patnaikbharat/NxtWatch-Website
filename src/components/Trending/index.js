import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import {
  AppContainer,
  SidebarContainer,
  TrendingContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingHeading,
  TrendingVideosContainer,
  TrendingFlexContainer,
  TrendingVideoThumbnail,
  TrendingVideoTitle,
  TrendingVideoSMInfoContainer,
  TrendingVideoLGInfoContainer,
  TrendingVideoChannelLogo,
  TrendingVideoInfo,
  TrendingTextFlexContainer,
  TrendingSMFlexContainer,
  TrendingFailureContainer,
  HomeFailureImage,
  HomeFailureHeading,
  HomeFailurePara,
  HomeRetryButton,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const fetchedVideoData = fetchedData.videos
      const updatedData = fetchedVideoData.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: eachVideo.channel,
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingSuccess = isDarkMode => {
    const {trendingData} = this.state

    return (
      <TrendingVideosContainer>
        {trendingData.map(eachVideo => (
          <Link
            to={`/videos/${eachVideo.id}`}
            className="video-link"
            key={eachVideo.id}
          >
            <TrendingFlexContainer key={eachVideo.id}>
              <TrendingVideoThumbnail
                src={eachVideo.thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoLGInfoContainer>
                <TrendingVideoTitle isDarkMode={isDarkMode}>
                  {eachVideo.title}
                </TrendingVideoTitle>
                <TrendingVideoInfo isDarkMode={isDarkMode}>
                  {eachVideo.channelName}
                </TrendingVideoInfo>
                <TrendingTextFlexContainer>
                  <TrendingVideoInfo isDarkMode={isDarkMode}>
                    {eachVideo.viewCount} views
                  </TrendingVideoInfo>
                  <TrendingVideoInfo isDarkMode={isDarkMode}>
                    -
                  </TrendingVideoInfo>
                  <TrendingVideoInfo isDarkMode={isDarkMode}>
                    {formatDistanceToNow(new Date(eachVideo.publishedAt))} ago
                  </TrendingVideoInfo>
                </TrendingTextFlexContainer>
              </TrendingVideoLGInfoContainer>
              <TrendingVideoSMInfoContainer>
                <TrendingSMFlexContainer>
                  <TrendingVideoChannelLogo
                    src={eachVideo.channelProfileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <TrendingVideoTitle>{eachVideo.title}</TrendingVideoTitle>
                    <TrendingTextFlexContainer>
                      <TrendingVideoInfo>
                        {eachVideo.channelName}
                      </TrendingVideoInfo>
                      <TrendingVideoInfo>-</TrendingVideoInfo>
                      <TrendingVideoInfo>
                        {eachVideo.viewCount} views
                      </TrendingVideoInfo>
                      <TrendingVideoInfo>-</TrendingVideoInfo>
                      <TrendingVideoInfo>
                        {eachVideo.publishedAt}
                        ago
                      </TrendingVideoInfo>
                    </TrendingTextFlexContainer>
                  </div>
                </TrendingSMFlexContainer>
              </TrendingVideoSMInfoContainer>
            </TrendingFlexContainer>
          </Link>
        ))}
      </TrendingVideosContainer>
    )
  }

  renderLoader = () => (
    <TrendingFailureContainer>
      <div data-testid="loader">
        <Loader type="ThreeDots" height={50} width={50} color="#3b82f6" />
      </div>
    </TrendingFailureContainer>
  )

  renderTrendingFailure = isDarkMode => (
    <TrendingFailureContainer>
      <HomeFailureImage
        src={
          isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <HomeFailureHeading isDarkMode={isDarkMode}>
        Oops! Something Went Wrong
      </HomeFailureHeading>
      <HomeFailurePara isDarkMode={isDarkMode}>
        We are having some trouble to complete your request.
      </HomeFailurePara>
      <HomeFailurePara isDarkMode={isDarkMode}>
        Please try again.
      </HomeFailurePara>
      <HomeRetryButton type="button" onClick={this.getTrendingData}>
        Retry
      </HomeRetryButton>
    </TrendingFailureContainer>
  )

  renderTrendingSwitchCondition = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingSuccess(isDarkMode)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderTrendingFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <div data-testid="trending">
              <Header />
              <AppContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <TrendingContainer
                  data-testid="trending"
                  isDarkMode={isDarkMode}
                >
                  <TrendingHeaderContainer isDarkMode={isDarkMode}>
                    <TrendingLogoContainer isDarkMode={isDarkMode}>
                      <HiFire size={40} color="#ff0b37" />
                    </TrendingLogoContainer>
                    <TrendingHeading isDarkMode={isDarkMode}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeaderContainer>
                  {this.renderTrendingSwitchCondition(isDarkMode)}
                </TrendingContainer>
              </AppContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
