import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as LogoSvg } from 'assets/images/logo.svg'
import { ReactComponent as LetterE } from 'assets/images/letterE.svg'
import { ReactComponent as NewestIcon } from 'assets/images/newest-icon.svg'

import * as S from './styled'

function index() {
  const handleSubmit = () => {}
  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <S.HeaderLeft>
          <S.HeaderLogoContainer>
            <S.HeaderLogo to="">
              <LogoSvg />
            </S.HeaderLogo>
          </S.HeaderLogoContainer>
          <S.HeaderDateNow>Thứ 2, 1/1/2000</S.HeaderDateNow>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.HottestLinkList>
            <S.HottestLinkItem to="">
              <NewestIcon /> <span>Mới nhất</span>
            </S.HottestLinkItem>
            <S.HottestLinkItem to="">
              <LetterE /> <span>International</span>
            </S.HottestLinkItem>
          </S.HottestLinkList>
          <S.Searchbar onSubmit={handleSubmit}>
            <S.SearchInput placeholder="Tìm kiếm" />
            <S.SearchSubmitButton type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </S.SearchSubmitButton>
          </S.Searchbar>
          <S.LoginButton>
            <FontAwesomeIcon icon={faUser} />
            <span>Đăng nhập</span>
          </S.LoginButton>
        </S.HeaderRight>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default index
