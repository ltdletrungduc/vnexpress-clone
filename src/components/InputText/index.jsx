import React, { useState } from 'react'
import * as S from './styled'

export default function InputText({ ...restProps }) {
  const [focus, setFocus] = useState(false)

  return (
    <S.Container focus={focus}>
      <input
        {...restProps}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </S.Container>
  )
}
