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
              <p>Tải ứng dụng</p>
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
              <p>Liên hệ</p>
              <div>
                <S.ContactLink to="">Toà soạn</S.ContactLink>
                <S.ContactLink to="">Quảng cáo</S.ContactLink>
                <S.ContactLink to="">Hợp tác bản quyền</S.ContactLink>
              </div>
            </S.Contact>
            <S.Hotline>
              <p>Đường dây nóng</p>
              <S.HotLineList>
                <S.HotLineItem>
                  <S.HotlineNumber>083.888.0123</S.HotlineNumber>
                  <S.HotlineLocation>(Hà Nội)</S.HotlineLocation>
                </S.HotLineItem>
                <S.HotLineItem>
                  <S.HotlineNumber>082.233.3555</S.HotlineNumber>
                  <S.HotlineLocation>(TP. Hồ Chí Minh)</S.HotlineLocation>
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
            <span>Theo dõi VnExpress trên</span>
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
            <strong>Báo tiếng Việt nhiều người xem nhất</strong>
            <div>Thuộc Bộ Khoa học Công nghệ</div>
            <div>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</div>
          </S.FooterCopyrightBlock>
          <S.FooterCopyrightBlock>
            <div>Phó Tổng Biên tập phụ trách: Phạm Hiếu</div>
            <div>
              Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
            </div>
            <div>Điện thoại: 024 7300 8899 - máy lẻ 4500</div>
          </S.FooterCopyrightBlock>
          <S.FooterCopyrightBlock>
            <div>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</div>
          </S.FooterCopyrightBlock>
        </S.FooterCopyright>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer
