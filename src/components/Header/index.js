import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {IoClose, IoSunnyOutline} from 'react-icons/io5'
import NxtWatchContext from '../NxtWatchContext'
import {
  NavContainer,
  NavWebsiteLogo,
  NavItemSMContainer,
  NavItemLGContainer,
  NavThemeButton,
  NavLink,
  NavProfileImage,
  NavSMLogoutButton,
  NavLGLogoutButton,
  NavPopupContainer,
  NavPopupModalContainer,
  NavPopupPara,
  NavPopupCancelButton,
  NavPopupConfirmButton,
  HomeFlexContainer,
  HomeTabName,
  NavSMPopupModalContainer,
} from './styledComponent'

class Header extends Component {
  onClickConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, onClickTheme, onChangeActiveTab, activeTab} = value
          const bgColor = isDarkMode ? '#ffffff' : ' #000000'
          const activeBg = isDarkMode ? '#424242' : '#f1f5f9'

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
            <NavContainer isDarkMode={isDarkMode}>
              <Link to="/">
                <NavWebsiteLogo
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <NavItemSMContainer>
                {isDarkMode ? (
                  <NavThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => onClickTheme()}
                  >
                    <IoSunnyOutline size={25} color="#f9f9f9" />
                  </NavThemeButton>
                ) : (
                  <NavThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => onClickTheme()}
                  >
                    <FaMoon size={25} />
                  </NavThemeButton>
                )}
                <Popup
                  modal
                  trigger={
                    <NavThemeButton type="button" isDarkMode={isDarkMode}>
                      <GiHamburgerMenu size={25} />
                    </NavThemeButton>
                  }
                >
                  {close => (
                    <NavSMPopupModalContainer isDarkMode={isDarkMode}>
                      <NavThemeButton
                        onClick={() => close()}
                        isDarkMode={isDarkMode}
                      >
                        <IoClose size={25} />
                      </NavThemeButton>
                      <NavLink to="/">
                        <HomeFlexContainer
                          onClick={onClickHome}
                          isActive={
                            activeTab === 'HOME' ? activeBg : 'transparent'
                          }
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
                            color={
                              activeTab === 'TRENDING' ? '#ff0000' : bgColor
                            }
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
                          isActive={
                            activeTab === 'GAMING' ? activeBg : 'transparent'
                          }
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
                            activeTab === 'SAVED_VIDEOS'
                              ? activeBg
                              : 'transparent'
                          }
                        >
                          <RiPlayListAddFill
                            size={25}
                            color={
                              activeTab === 'SAVED_VIDEOS' ? '#ff0000' : bgColor
                            }
                          />
                          <HomeTabName
                            weight={
                              activeTab === 'SAVED_VIDEOS' ? '700' : '500'
                            }
                            color={isDarkMode ? '#f9f9f9' : '#181818'}
                          >
                            Saved Videos
                          </HomeTabName>
                        </HomeFlexContainer>
                      </NavLink>
                    </NavSMPopupModalContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <NavSMLogoutButton type="button" isDarkMode={isDarkMode}>
                      <FiLogOut size={25} />
                    </NavSMLogoutButton>
                  }
                >
                  {close => (
                    <NavPopupModalContainer isDarkMode={isDarkMode}>
                      <NavPopupPara isDarkMode={isDarkMode}>
                        Are you sure you want to logout ?
                      </NavPopupPara>
                      <div>
                        <NavPopupCancelButton
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </NavPopupCancelButton>
                        <NavPopupConfirmButton
                          type="button"
                          onClick={this.onClickConfirm}
                        >
                          Confirm
                        </NavPopupConfirmButton>
                      </div>
                    </NavPopupModalContainer>
                  )}
                </Popup>
              </NavItemSMContainer>
              <NavItemLGContainer>
                {isDarkMode ? (
                  <NavThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => onClickTheme()}
                  >
                    <IoSunnyOutline size={25} color="#f9f9f9" />
                  </NavThemeButton>
                ) : (
                  <NavThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => onClickTheme()}
                  >
                    <FaMoon size={25} />
                  </NavThemeButton>
                )}
                <NavProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <NavPopupContainer>
                  <Popup
                    modal
                    trigger={
                      <NavLGLogoutButton type="button">
                        Logout
                      </NavLGLogoutButton>
                    }
                  >
                    {close => (
                      <NavPopupModalContainer isDarkMode={isDarkMode}>
                        <NavPopupPara isDarkMode={isDarkMode}>
                          Are you sure, you want to logout
                        </NavPopupPara>
                        <div>
                          <NavPopupCancelButton
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </NavPopupCancelButton>
                          <NavPopupConfirmButton
                            type="button"
                            onClick={this.onClickConfirm}
                          >
                            Confirm
                          </NavPopupConfirmButton>
                        </div>
                      </NavPopupModalContainer>
                    )}
                  </Popup>
                </NavPopupContainer>
              </NavItemLGContainer>
            </NavContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
