import React from 'react'

import * as S from './styled'

function ButtonLink({ children, link, ...restProps }) {
  return (
    <S.ButtonLink to={link} {...restProps}>
      {children}
    </S.ButtonLink>
  )
}

export default ButtonLink
