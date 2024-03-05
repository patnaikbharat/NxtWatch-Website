import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SidebarContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  height: auto;
  min-height: 92vh;
  width: 100%;
`

export const SavedVideosHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f5f9')};
  padding: 25px;
  padding-left: 50px;
`

export const SavedVideosLogoContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#cbd5e1')};
  border-radius: 40px;
  padding: 15px;
  margin-right: 15px;
  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const SavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f1f5f9' : '#0f0f0f')};
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const SavedVideosVideosContainer = styled.ul`
  padding-left: 0px;
`

export const SavedVideosFlexContainer = styled.li`
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

export const SavedVideosVideoThumbnail = styled.img`
  width: 30%;
  max-height: 300px;
  margin-right: 12px;
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const SavedVideosVideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const SavedVideosVideoInfo = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 15px;
`

export const SavedVideosTextFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SavedVideosVideoSMInfoContainer = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`

export const SavedVideosVideoLGInfoContainer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`

export const SavedVideosSMFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosVideoChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
`

export const SavedVideosNoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#f9f9f9')};
`

export const SavedVideosNoVideosImage = styled.img`
  width: 80%;
  max-width: 700px;
  margin-bottom: 70px;
`

export const SavedVideosNoVideosHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 28px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 30px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const SavedVideosNoVideosPara = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
  @media (max-width: 767px) {
    font-size: 17px;
  }
`
