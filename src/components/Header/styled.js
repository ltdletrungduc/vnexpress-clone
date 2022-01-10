import ButtonLink from 'components/ButtonLink'
import InputText from 'components/InputText'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  padding: 8.5px 0;
  border-bottom: 1px solid #e5e5e5;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderLogoContainer = styled.div``
export const HeaderLogo = styled(Link)`
  svg {
    width: 15rem;
    height: 2.8rem;
  }
`
export const HeaderDateNow = styled.div`
  font-size: 14px;
  line-height: 32px;
  color: #757575;
  position: relative;
  margin-left: 20px;
  padding-left: 15px;
  &::before {
    content: '';
    width: 1px;
    height: 26px;
    background: #e5e5e5;
    position: absolute;
    left: 0;
    top: 2px;
  }
`
export const HeaderRight = styled.div`
  display: flex;
`
export const HottestLinkList = styled.div`
  display: flex;
  align-items: center;
`
export const HottestLinkItem = styled(ButtonLink)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  &:first-child {
    margin-right: 1.5rem;
  }
`
export const Searchbar = styled.form`
  position: relative;
  padding-left: 15px;
  margin-left: 15px;
  &::before {
    content: '';
    width: 1px;
    height: 24px;
    background: #e5e5e5;
    position: absolute;
    left: 0;
    top: 4px;
  }
`

export const SearchInput = styled(InputText)`
  width: 160px;
`

export const SearchSubmitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #bdbdbd;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 3.2rem;
`
export const LoginButton = styled.div`
  margin-left: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  span {
    color: #4f4f4f;
    margin-left: 5px;
    user-select: none;
  }
  &:hover {
    span {
      color: #087cce;
    }
  }
`
