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

export const VideoItemMainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  height: 92vh;
  width: 100%;
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const VideoMainFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const VideoFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoInfo = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 15px;
`

export const VideoReactionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  color: ${props => props.color};
`

export const VideoReaction = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 5px;
  margin-right: 15px;
  color: ${props => props.color};
`

export const Line = styled.hr`
  border: solid 1px #cccccc;
  width: 100%;
`

export const VideoChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`

export const VideoChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#1e293b')};
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const VideoChannelSubscriber = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
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
