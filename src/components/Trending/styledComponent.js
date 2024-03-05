import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SidebarContainer = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  height: auto;
  min-height: 92vh;
  width: 100%;
`

export const TrendingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f5f9')};
  padding: 25px;
  padding-left: 50px;
  @media (max-width: 576px) {
    padding: 15px;
  }
`

export const TrendingLogoContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#cbd5e1')};
  border-radius: 40px;
  padding: 15px;
  margin-right: 15px;
  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const TrendingHeading = styled.div`
  color: ${props => (props.isDarkMode ? '#f1f5f9' : '#0f0f0f')};
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const TrendingVideosContainer = styled.ul`
  padding-left: 0px;
`

export const TrendingFlexContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin: 20px;
  list-style: none;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-bottom: 10px;
  }
`

export const TrendingVideoThumbnail = styled.img`
  width: 30%;
  margin-right: 12px;
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingVideoTitle = styled.h1`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const TrendingVideoSMInfoContainer = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`

export const TrendingVideoLGInfoContainer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`

export const TrendingVideoChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
`

export const TrendingVideoInfo = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 15px;
  margin-top: 0px;
`

export const TrendingTextFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendingSMFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 78vh;
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
