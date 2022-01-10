import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <S.ScrollButton
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </S.ScrollButton>
  )
}

export default ScrollButton
