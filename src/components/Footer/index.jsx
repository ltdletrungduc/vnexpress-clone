import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { ReactComponent as LogoSvg } from 'assets/images/logo.svg'
import { ReactComponent as LetterE } from 'assets/images/letterE.svg'
import { ReactComponent as LetterEGrey } from 'assets/images/letterEGrey.svg'
import * as S from './styled'

function Footer() {
  return (
    <S.Footer>
      <S.FooterContainer className="container">
        <S.FooterMenu>
          <S.FooterMenuList className="special">
            {Array(8)
              .fill(0)
              .map((item, index) => {
                return (
                  <S.FooterMenuItem key={index}>
                    <S.FooterMenuItemLink to="">
                      Item + {index}
                    </S.FooterMenuItemLink>
                  </S.FooterMenuItem>
                )
              })}
          </S.FooterMenuList>
          <S.FooterMenuList>
            {Array(5)
              .fill(0)
              .map((item, index) => {
                return (
                  <S.FooterMenuItem key={index}>
                    <S.FooterMenuItemLink to="">
                      Item + {index}
                    </S.FooterMenuItemLink>
                  </S.FooterMenuItem>
                )
              })}
          </S.FooterMenuList>
          <S.FooterMenuList>
            {Array(6)
              .fill(0)
              .map((item, index) => {
                return (
                  <S.FooterMenuItem key={index}>
                    <S.FooterMenuItemLink to="">
                      Item + {index}
                    </S.FooterMenuItemLink>
                  </S.FooterMenuItem>
                )
              })}
          </S.FooterMenuList>
          <S.FooterMenuList>
            {Array(6)
              .fill(0)
              .map((item, index) => {
                return (
                  <S.FooterMenuItem key={index}>
                    <S.FooterMenuItemLink to="">
                      Item + {index}
                    </S.FooterMenuItemLink>
                  </S.FooterMenuItem>
                )
              })}
          </S.FooterMenuList>
          <S.FooterMenuList className="sub-domain">
            {Array(6)
              .fill(0)
              .map((item, index) => {
                return (
                  <S.FooterMenuItem key={index}>
                    <S.FooterMenuItemLink to="">
                      Item + {index}
                    </S.FooterMenuItemLink>
                  </S.FooterMenuItem>
                )
              })}
          </S.FooterMenuList>
          <S.ContactWrapper>
            <S.DownloadApp>
              <p>T???i ???ng d???ng</p>
              <div>
                <S.DownloadAppLink to="" className="download-app">
                  <span>
                    <LetterE /> VnExpress
                  </span>
                </S.DownloadAppLink>
                <S.DownloadAppLink to="" className="download-app">
                  <span>
                    <LetterEGrey /> International
                  </span>
                </S.DownloadAppLink>
              </div>
            </S.DownloadApp>
            <S.Contact>
              <p>Li??n h???</p>
              <div>
                <S.ContactLink to="">To?? so???n</S.ContactLink>
                <S.ContactLink to="">Qu???ng c??o</S.ContactLink>
                <S.ContactLink to="">H???p t??c b???n quy???n</S.ContactLink>
              </div>
            </S.Contact>
            <S.Hotline>
              <p>???????ng d??y n??ng</p>
              <S.HotLineList>
                <S.HotLineItem>
                  <S.HotlineNumber>083.888.0123</S.HotlineNumber>
                  <S.HotlineLocation>(H?? N???i)</S.HotlineLocation>
                </S.HotLineItem>
                <S.HotLineItem>
                  <S.HotlineNumber>082.233.3555</S.HotlineNumber>
                  <S.HotlineLocation>(TP. H??? Ch?? Minh)</S.HotlineLocation>
                </S.HotLineItem>
              </S.HotLineList>
            </S.Hotline>
          </S.ContactWrapper>
        </S.FooterMenu>
        <S.FooterSocial>
          <S.FooterLogoContainer>
            <S.FooterLogo to="/">
              <LogoSvg />
            </S.FooterLogo>
          </S.FooterLogoContainer>
          <Link to="">RSS</Link>
          <S.FooterSocialLink>
            <span>Theo d??i VnExpress tr??n</span>
            <S.SocialLinkContainer className="facebook-link" to="">
              <FontAwesomeIcon icon={faFacebookF} />
            </S.SocialLinkContainer>
            <S.SocialLinkContainer className="twitter-link" to="">
              <FontAwesomeIcon icon={faTwitter} />
            </S.SocialLinkContainer>
            <S.SocialLinkContainer className="youtube-link" to="">
              <FontAwesomeIcon icon={faYoutube} />
            </S.SocialLinkContainer>
          </S.FooterSocialLink>
        </S.FooterSocial>
        <S.FooterCopyright>
          <S.FooterCopyrightBlock>
            <strong>B??o ti???ng Vi???t nhi???u ng?????i xem nh???t</strong>
            <div>Thu???c B??? Khoa h???c C??ng ngh???</div>
            <div>S??? gi???y ph??p: 548/GP-BTTTT ng??y 24/08/2021</div>
          </S.FooterCopyrightBlock>
          <S.FooterCopyrightBlock>
            <div>Ph?? T???ng Bi??n t???p ph??? tr??ch: Ph???m Hi???u</div>
            <div>
              ?????a ch???: T???ng 5, T??a nh?? FPT, 17 ph??? Duy T??n, C???u Gi???y, H?? N???i
            </div>
            <div>??i???n tho???i: 024 7300 8899 - m??y l??? 4500</div>
          </S.FooterCopyrightBlock>
          <S.FooterCopyrightBlock>
            <div>?? 1997-2022. To??n b??? b???n quy???n thu???c VnExpress</div>
          </S.FooterCopyrightBlock>
        </S.FooterCopyright>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer
