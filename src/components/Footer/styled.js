import ButtonLink from 'components/ButtonLink'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.footer``
export const FooterContainer = styled.div``
export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #757575;
  line-height: 1.2;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;
`
export const FooterLogoContainer = styled.div`
  margin-right: auto;
`
export const FooterLogo = styled.div`
  svg {
    width: 14rem;
    height: 2.6rem;
  }
`
export const FooterSocialLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const SocialLinkContainer = styled(Link)`
  width: 32px;
  height: 32px;
  border: 1px solid #e5e5e5;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  transition: 0.4s;
  &:hover {
    color: #fff;
    &.facebook-link {
      background: #3b5999;
      border: 1px solid #3b5999;
    }
    &.youtube-link {
      background: #c00;
      border: 1px solid #c00;
    }
    &.twitter-link {
      background: #55acee;
      border: 1px solid #55acee;
    }
  }
`
export const FooterCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterCopyrightBlock = styled.div`
  width: 30%;
  padding-right: 30px;
  font-size: 14px;
  line-height: 20px;
  &:nth-child(2) {
    width: 40%;
  }
`
export const FooterMenu = styled.div`
  border-top: 5px solid #e5e5e5;
  padding: 20px 0;
  font-size: 14px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`
export const FooterMenuItem = styled.li`
  margin-bottom: 1.5rem;
`
export const FooterMenuItemLink = styled(Link)`
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #222;
    position: absolute;
    left: 0;
    bottom: -1px;
    display: none;
  }
  &:hover {
    &::before {
      display: block;
    }
  }
`
export const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &.special {
    ${FooterMenuItem} {
      font-weight: bold;
    }
    ${FooterMenuItemLink} {
      &::before {
        height: 2px;
      }
    }
  }
  &.sub-domain {
    &::before {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      left: -15px;
      background: #e5e5e5;
    }
  }
`

export const ContactWrapper = styled.div`
  width: 250px;
  position: relative;
  line-height: 120%;
  p {
    margin-bottom: 6px;
    color: #757575;
  }
  &::before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    left: -15px;
    background: #e5e5e5;
  }
`
export const Contact = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`
export const ContactLink = styled(Link)`
  width: 120px;
  border-radius: 3px;
  height: 20px;
  line-height: 20px;
  display: block;
  text-align: left;
  margin-bottom: 8px;
  transition: color 0.2s;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: #087cce;
  }
`
export const DownloadApp = styled.div`
  margin-bottom: 8px;
  div {
    display: flex;
  }
`
export const DownloadAppLink = styled(ButtonLink)`
  &.download-app {
    width: 120px;
    text-align: center;
    background: #f7f7f7;
    transition: background 0.4s;
    &:first-child {
      margin-right: 1rem;
    }
    &:hover {
      background: #e5e5e5;
    }
  }
`
export const Hotline = styled.div`
  padding-top: 8px;
  border-top: 1px solid #e0e0e0;
  p {
    margin-bottom: 1rem;
  }
`
export const HotLineList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const HotLineItem = styled.div`
  width: 45%;
  &:nth-child(1) {
    margin-right: 5%;
  }
  &:nth-child(2) {
    margin-left: 5%;
  }
`
export const HotlineNumber = styled.div`
  font-size: 16px;
  font-weight: bolder;
`
export const HotlineLocation = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #757575;
`
