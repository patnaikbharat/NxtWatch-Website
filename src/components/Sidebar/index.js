import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import NxtWatchContext from '../NxtWatchContext'
import {
  HomeSidebarContainer,
  HomeSidebarItemContainer,
  HomeSidebarSocialContainer,
  NavLink,
  HomeFlexContainer,
  HomeTabName,
  HomeContactUs,
  HomeSocialLogo,
  HomeSidebarPara,
} from './styledComponent'

class Sidebar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, onChangeActiveTab, activeTab} = value
          const bgColor = isDarkMode ? '#ffffff' : ' #000000'
          const activeBg = isDarkMode ? '#424242' : '#f1f5f9'
          const textColor = isDarkMode ? '#f9f9f9' : '#181818'

          const onClickHome = () => {
            onChangeActiveTab('HOME')
          }

          const onClickTrending = () => {
            onChangeActiveTab('TRENDING')
          }

          const onClickGaming = () => {
            onChangeActiveTab('GAMING')
          }

          const onClickSavedVideos = () => {
            onChangeActiveTab('SAVED_VIDEOS')
          }

          return (
            <HomeSidebarContainer isDarkMode={isDarkMode}>
              <HomeSidebarItemContainer>
                <NavLink to="/">
                  <HomeFlexContainer
                    onClick={onClickHome}
                    isActive={activeTab === 'HOME' ? activeBg : 'transparent'}
                  >
                    <IoMdHome
                      size={25}
                      color={activeTab === 'HOME' ? '#ff0000' : bgColor}
                    />
                    <HomeTabName
                      weight={activeTab === 'HOME' ? '700' : '500'}
                      color={isDarkMode ? '#f9f9f9' : '#181818'}
                    >
                      Home
                    </HomeTabName>
                  </HomeFlexContainer>
                </NavLink>
                <NavLink to="/trending">
                  <HomeFlexContainer
                    onClick={onClickTrending}
                    isActive={
                      activeTab === 'TRENDING' ? activeBg : 'transparent'
                    }
                  >
                    <HiFire
                      size={25}
                      color={activeTab === 'TRENDING' ? '#ff0000' : bgColor}
                    />
                    <HomeTabName
                      weight={activeTab === 'TRENDING' ? '700' : '500'}
                      color={isDarkMode ? '#f9f9f9' : '#181818'}
                    >
                      Trending
                    </HomeTabName>
                  </HomeFlexContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <HomeFlexContainer
                    onClick={onClickGaming}
                    isActive={activeTab === 'GAMING' ? activeBg : 'transparent'}
                  >
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'GAMING' ? '#ff0000' : bgColor}
                    />
                    <HomeTabName
                      weight={activeTab === 'GAMING' ? '700' : '500'}
                      color={isDarkMode ? '#f9f9f9' : '#181818'}
                    >
                      Gaming
                    </HomeTabName>
                  </HomeFlexContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <HomeFlexContainer
                    onClick={onClickSavedVideos}
                    isActive={
                      activeTab === 'SAVED_VIDEOS' ? activeBg : 'transparent'
                    }
                  >
                    <RiPlayListAddFill
                      size={25}
                      color={activeTab === 'SAVED_VIDEOS' ? '#ff0000' : bgColor}
                    />
                    <HomeTabName
                      weight={activeTab === 'SAVED_VIDEOS' ? '700' : '500'}
                      color={isDarkMode ? '#f9f9f9' : '#181818'}
                    >
                      Saved Videos
                    </HomeTabName>
                  </HomeFlexContainer>
                </NavLink>
              </HomeSidebarItemContainer>
              <HomeSidebarSocialContainer>
                <HomeContactUs color={textColor}>CONTACT US</HomeContactUs>
                <HomeFlexContainer>
                  <HomeSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <HomeSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <HomeSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </HomeFlexContainer>
                <HomeSidebarPara color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </HomeSidebarPara>
              </HomeSidebarSocialContainer>
            </HomeSidebarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Sidebar
