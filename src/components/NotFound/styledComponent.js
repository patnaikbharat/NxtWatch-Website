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

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#000000' : '#f9f9f9')};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94vh;
  width: 100%;
`

export const NotFoundImage = styled.img`
  height: 60vh;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 40vh;
    max-width: 95%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const NotFoundPara = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#383838')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
