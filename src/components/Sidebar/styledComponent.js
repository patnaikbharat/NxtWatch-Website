import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 92vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
`

export const HomeSidebarItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`

export const HomeSidebarSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const HomeSidebarTabItem = styled.li`
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  background-color: ${props => props.isActive};
`

export const HomeFlexContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  background-color: ${props => props.isActive};
`

export const HomeTabName = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: ${props => props.weight};
  font-family: 'Roboto';
  margin-left: 20px;
  margin-top: 20px;
`

export const HomeContactUs = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const HomeSocialLogo = styled.img`
  width: 35px;
  margin-right: 15px;
`

export const HomeSidebarPara = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 35px;
`
