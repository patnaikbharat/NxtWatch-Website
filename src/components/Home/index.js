import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {IoClose} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import {
  HomeContainer,
  HomeFlexContainer,
  HomeMainContainer,
  IsSidebarVisible,
  HomeBannerContainer,
  HomeBannerWebsiteLogo,
  HomeBannerPara,
  HomeBannerButton,
  HomeBannerCloseButton,
  HomeVideosContainer,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchIcon,
  HomeVideoFlexContainer,
  HomeVideoListContainer,
  HomeVideoListItem,
  HomeVideoThumbnail,
  HomeVideoChannelContainer,
  HomeVideoChannelLogo,
  HomeVideoTitle,
  HomeVideoInfo,
  HomeNoVideosContainer,
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

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideoData: [],
    isBannerShow: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResult = () => {
    this.getHomeVideos()
  }

  onClickCloseButton = () => {
    this.setState({isBannerShow: false})
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeSuccess = isDarkMode => {
    const {homeVideoData, isBannerShow} = this.state

    return (
      <HomeVideoListContainer>
        {homeVideoData.length > 0 ? (
          homeVideoData.map(eachVideo => (
            <HomeVideoListItem key={eachVideo.id}>
              <Link to={`/videos/${eachVideo.id}`} className="video-link">
                <HomeVideoThumbnail
                  src={eachVideo.thumbnailUrl}
                  alt="video thumbnail"
                />
                <HomeVideoChannelContainer>
                  <HomeVideoChannelLogo
                    src={eachVideo.channelProfileImageUrl}
                    alt="channel logo"
                  />
                  <div>
                    <HomeVideoTitle isDarkMode={isDarkMode}>
                      {eachVideo.title}
                    </HomeVideoTitle>
                    <HomeVideoInfo isDarkMode={isDarkMode}>
                      {eachVideo.channelName}
                    </HomeVideoInfo>
                    <HomeFlexContainer>
                      <HomeVideoInfo isDarkMode={isDarkMode}>
                        {eachVideo.viewCount} views
                      </HomeVideoInfo>
                      <HomeVideoInfo isDarkMode={isDarkMode}>-</HomeVideoInfo>
                      <HomeVideoInfo isDarkMode={isDarkMode}>
                        {eachVideo.publishedAt}
                        ago
                      </HomeVideoInfo>
                    </HomeFlexContainer>
                  </div>
                </HomeVideoChannelContainer>
              </Link>
            </HomeVideoListItem>
          ))
        ) : (
          <HomeNoVideosContainer isBannerShow={isBannerShow}>
            <HomeFailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeFailureHeading isDarkMode={isDarkMode}>
              No Search results found
            </HomeFailureHeading>
            <HomeFailurePara isDarkMode={isDarkMode}>
              Try different key words or remove search filter
            </HomeFailurePara>
            <HomeRetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </HomeRetryButton>
          </HomeNoVideosContainer>
        )}
      </HomeVideoListContainer>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" height={50} width={50} color="#3b82f6" />
    </div>
  )

  renderHomeFailure = isDarkMode => (
    <>
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
      <HomeRetryButton type="button" onClick={this.getHomeVideos}>
        Retry
      </HomeRetryButton>
    </>
  )

  renderHomeSwitchCondition = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeSuccess(isDarkMode)
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderHomeFailure()
      default:
        return null
    }
  }

  render() {
    const {searchInput, isBannerShow} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <IsSidebarVisible>
                  <Sidebar />
                </IsSidebarVisible>
                <HomeMainContainer data-testid="home" isDarkMode={isDarkMode}>
                  <HomeBannerContainer
                    isBannerShow={isBannerShow}
                    data-testid="banner"
                  >
                    <div>
                      <HomeBannerWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <HomeBannerPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </HomeBannerPara>
                      <HomeBannerButton type="button">
                        GET IT NOW
                      </HomeBannerButton>
                    </div>
                    <div>
                      <HomeBannerCloseButton
                        onClick={this.onClickCloseButton}
                        data-testid="close"
                      >
                        <IoClose size={15} />
                      </HomeBannerCloseButton>
                    </div>
                  </HomeBannerContainer>
                  <HomeVideosContainer
                    data-testid="home"
                    isBannerShow={isBannerShow}
                    isDarkMode={isDarkMode}
                  >
                    <HomeSearchContainer>
                      <HomeSearchInput
                        type="search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search"
                      />
                      <HomeSearchIcon
                        onClick={this.getSearchResult}
                        data-testid="searchButton"
                      >
                        <FaSearch size={15} />
                      </HomeSearchIcon>
                    </HomeSearchContainer>
                    <HomeVideoFlexContainer>
                      {this.renderHomeSwitchCondition(isDarkMode)}
                    </HomeVideoFlexContainer>
                  </HomeVideosContainer>
                </HomeMainContainer>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
