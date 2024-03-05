import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import {
  AppContainer,
  SidebarContainer,
  VideoItemMainContainer,
  VideoItemContainer,
  VideoTitle,
  VideoMainFlexContainer,
  VideoFlexContainer,
  VideoInfo,
  VideoReactionButton,
  VideoReaction,
  Line,
  VideoChannelLogo,
  VideoChannelName,
  VideoChannelSubscriber,
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

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoInfo()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  getVideoInfo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details
      console.log(fetchedData)
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channelName: videoDetails.channel.name,
        channelProfileImageUrl: videoDetails.channel.profile_image_url,
        channelSubscriberCount: videoDetails.channel.subscriber_count,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoSuccess = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      channelName,
      channelProfileImageUrl,
      channelSubscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            savedVideosList,
            addToSaveVideos,
            removeToSaveVideos,
            isDarkMode,
          } = value
          const isPresent = savedVideosList.find(
            eachVideo => eachVideo.id === id,
          )
          const onClickSave = () => {
            if (isPresent) {
              removeToSaveVideos(id)
            } else {
              addToSaveVideos(videoDetails)
            }
          }

          return (
            <>
              <ReactPlayer url={videoUrl} width="100%" height="50%" controls />
              <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
              <VideoMainFlexContainer>
                <VideoFlexContainer>
                  <VideoInfo isDarkMode={isDarkMode}>
                    {viewCount} views
                  </VideoInfo>
                  <VideoInfo isDarkMode={isDarkMode}>
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </VideoInfo>
                </VideoFlexContainer>
                <VideoFlexContainer>
                  <VideoReactionButton
                    type="button"
                    onClick={this.onClickLike}
                    color={isLiked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike
                      size={25}
                      color={isLiked ? '#2563eb' : '#64748b'}
                    />
                    <VideoReaction color={isLiked ? '#2563eb' : '#64748b'}>
                      Like
                    </VideoReaction>
                  </VideoReactionButton>
                  <VideoReactionButton
                    type="button"
                    onClick={this.onClickDislike}
                    color={isDisliked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike
                      size={25}
                      color={isDisliked ? '#2563eb' : '#64748b'}
                    />
                    <VideoReaction color={isDisliked ? '#2563eb' : '#64748b'}>
                      Dislike
                    </VideoReaction>
                  </VideoReactionButton>
                  <VideoReactionButton
                    type="button"
                    isSaved={isPresent}
                    onClick={onClickSave}
                    color={isPresent ? '#2563eb' : '#64748b'}
                  >
                    <RiPlayListAddLine size={25} />
                    <VideoReaction>
                      {isPresent ? 'Saved' : 'Save'}
                    </VideoReaction>
                  </VideoReactionButton>
                </VideoFlexContainer>
              </VideoMainFlexContainer>
              <Line />
              <VideoFlexContainer>
                <VideoChannelLogo src={channelProfileImageUrl} />
                <div>
                  <VideoChannelName isDarkMode={isDarkMode}>
                    {channelName}
                  </VideoChannelName>
                  <VideoChannelSubscriber isDarkMode={isDarkMode}>
                    {channelSubscriberCount} subscribers
                  </VideoChannelSubscriber>
                </div>
              </VideoFlexContainer>
              <VideoChannelName isDarkMode={isDarkMode}>
                {description}
              </VideoChannelName>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoader = () => (
    <VideoItemContainer>
      <div data-testid="loader">
        <Loader type="ThreeDots" height={50} width={50} color="#3b82f6" />
      </div>
    </VideoItemContainer>
  )

  renderVideoFailure = isDarkMode => (
    <VideoItemContainer>
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
        We are having some trouble to complete your request. Please try again.
      </HomeFailurePara>
      <HomeRetryButton type="button" onClick={this.getVideoInfo}>
        Retry
      </HomeRetryButton>
    </VideoItemContainer>
  )

  renderVideoSwitchCondition = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoSuccess()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderVideoFailure(isDarkMode)
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
                <VideoItemMainContainer
                  data-testid="videoItemDetails"
                  isDarkMode={isDarkMode}
                >
                  {this.renderVideoSwitchCondition(isDarkMode)}
                </VideoItemMainContainer>
              </AppContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
