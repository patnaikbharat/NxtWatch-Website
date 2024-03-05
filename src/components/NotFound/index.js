import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import {
  AppContainer,
  SidebarContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
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
            <NotFoundContainer isDarkMode={isDarkMode}>
              <NotFoundImage
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkMode={isDarkMode}>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </AppContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
