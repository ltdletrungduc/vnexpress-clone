import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.section`
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 999;
`
export const MainNav = styled.nav`
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
export const NavMenuList = styled.ul`
  display: flex;
  align-items: center;
  max-width: 1370px;
  margin: 0 auto;
  padding: 0 15px;
`
export const NavMenuLink = styled(NavLink)`
  display: block;
  white-space: nowrap;
  text-transform: capitalize;
  transition: 0.4s;
  &:hover {
    color: #9f224e;
  }
`
export const NavMenuItem = styled.li`
  margin-right: 15px;
  position: relative;
  font-weight: 600;
  color: #4f4f4f;
  transition-duration: 200ms;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
  &.home-nav {
    padding: 12px 0;
    ${NavMenuLink} {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: rgba(117, 117, 117, 0.2);
      color: #757575;
      &:hover {
        color: #fff;
        background-color: #9f224e;
      }
    }
  }
`
export const MenuButton = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #bdbdbd;
  transition: color 0.4s;
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
    margin-right: 5px;
  }
  &:hover {
    color: #9f224e;
  }
`
