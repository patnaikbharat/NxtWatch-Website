import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
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
  GamingVideosContainer,
  GamingVideoContainer,
  GamingVideoThumbnail,
  GamingVideoTitle,
  GamingVideoInfo,
  GamingFailureContainer,
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

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingSuccess = isDarkMode => {
    const {gamingData} = this.state

    return (
      <GamingVideosContainer>
        {gamingData.map(eachVideo => (
          <GamingVideoContainer>
            <Link to={`/videos/${eachVideo.id}`} className="video-link">
              <GamingVideoThumbnail
                src={eachVideo.thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingVideoTitle isDarkMode={isDarkMode}>
                {eachVideo.title}
              </GamingVideoTitle>
              <GamingVideoInfo isDarkMode={isDarkMode}>
                {eachVideo.viewCount} Watching Worldwide
              </GamingVideoInfo>
            </Link>
          </GamingVideoContainer>
        ))}
      </GamingVideosContainer>
    )
  }

  renderLoader = () => (
    <GamingFailureContainer>
      <div data-testid="loader">
        <Loader type="ThreeDots" height={50} width={50} color="#3b82f6" />
      </div>
    </GamingFailureContainer>
  )

  renderTrendingFailure = isDarkMode => (
    <GamingFailureContainer>
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
      <HomeRetryButton type="button" onClick={this.getGamingData}>
        Retry
      </HomeRetryButton>
    </GamingFailureContainer>
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
            <>
              <Header />
              <AppContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <TrendingContainer data-testid="gaming" isDarkMode={isDarkMode}>
                  <TrendingHeaderContainer isDarkMode={isDarkMode}>
                    <TrendingLogoContainer isDarkMode={isDarkMode}>
                      <SiYoutubegaming size={40} color="#ff0b37" />
                    </TrendingLogoContainer>
                    <TrendingHeading isDarkMode={isDarkMode}>
                      Gaming
                    </TrendingHeading>
                  </TrendingHeaderContainer>
                  {this.renderTrendingSwitchCondition(isDarkMode)}
                </TrendingContainer>
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
