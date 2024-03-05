import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 92vh;
`

export const HomeFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HomeMainContainer = styled.div`
  width: 84vw;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  @media (max-width: 769px) {
    width: 100vw;
  }
`

export const IsSidebarVisible = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 25vh;
  padding: 30px;
  display: ${props => (props.isBannerShow ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
`

export const HomeBannerWebsiteLogo = styled.img`
  width: 200px;
  @media (max-width: 769px) {
    width: 150px;
  }
`

export const HomeBannerPara = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const HomeBannerButton = styled.button`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: transparent;
  border: solid 1px #1e293b;
  height: 35px;
  width: 110px;
  outline: none;
  cursor: pointer;
`

export const HomeBannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const HomeVideosContainer = styled.div`
  height: auto;
  min-height: ${props => (props.isBannerShow ? '67vh' : '92vh')};
  width: 100%;
  padding: 20px;
`

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: solid 1px #64748b;
  height: 35px;
  max-width: 400px;
  @media (max-width: 577px) {
    width: 100%;
    max-width: 900px;
    padding: 0px;
  }
`

export const HomeSearchInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px;
  width: 100%;
  outline: none;
`

export const HomeSearchIcon = styled.button`
  width: 50px;
  height: 33px;
  border: none;
  border-left: solid 1px #64748b;
  outline: none;
  cursor: pointer;
`

export const HomeVideoFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 59vh;
  width: 100%;
`

export const HomeVideoListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 769px) {
    padding: 0px;
  }
`

export const HomeVideoListItem = styled.li`
  width: 30%;
  margin: 15px;
  list-style: none;
  @media (min-width: 578px) {
    width: 45%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (max-width: 577px) {
    width: 100%;
  }
`

export const HomeVideoThumbnail = styled.img`
  width: 100%;
`

export const HomeVideoChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  @media (max-width: 769px) {
    padding: 0px;
  }
`

export const HomeVideoChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-top: 15px;
  margin-right: 15px;
  @media (max-width: 769px) {
    width: 30px;
    height: 30px;
  }
`

export const HomeVideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  @media (max-width: 769px) {
    font-size: 13px;
  }
`

export const HomeVideoInfo = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-right: 15px;
  @media (max-width: 769px) {
    font-size: 13px;
  }
`

export const HomeNoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.isBannerShow ? '60vh' : '85vh')};
`

export const HomeFailureImage = styled.img`
  max-width: 400px;
`

export const HomeFailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#212121')};
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const HomeFailurePara = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`

export const HomeRetryButton = styled.button`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border-width: 0px;
  border-radius: 5px;
  height: 35px;
  width: 90px;
  outline: none;
  cursor: pointer;
`
