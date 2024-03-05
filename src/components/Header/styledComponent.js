import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 8vh;
  width: 100%;
  @media (max-width: 769px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
`

export const NavWebsiteLogo = styled.img`
  width: 200px;
  @media (max-width: 769px) {
    width: 120px;
  }
`

export const NavItemSMContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`

export const NavItemLGContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavThemeButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 15px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  align-self: flex-end;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavProfileImage = styled.img`
  width: 30px;
`

export const NavSMLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  cursor: pointer;
`

export const NavLGLogoutButton = styled.button`
  color: #3b82f6;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: transparent;
  border: solid 1px #3b82f6;
  border-radius: 5px;
  height: 38px;
  width: 95px;
  margin-left: 20px;
  outline: none;
  cursor: pointer;
`

export const NavPopupContainer = styled.div``

export const NavPopupModalContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#383838' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
`

export const NavPopupPara = styled.p`
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 35px;
`

export const NavPopupCancelButton = styled.button`
  color: #7e858e;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: transparent;
  border: solid 1px #7e858e;
  border-radius: 5px;
  height: 38px;
  width: 90px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
`

export const NavPopupConfirmButton = styled.button`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 5px;
  height: 38px;
  width: 90px;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
`

export const HomeSidebarTabItem = styled.li`
  background-color: ${isActive => (isActive ? '#d7dfe9' : 'transparent')};
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
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

export const NavSMPopupModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  padding: 10px;
`
