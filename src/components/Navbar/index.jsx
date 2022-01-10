import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import * as S from './styled'
import { useDispatch } from 'react-redux'
import { getCategories } from 'reducers/category.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { path } from 'constant/path'

function Navbar() {
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        let _arr = Object.values(res)
        let result = _arr.slice(0, _arr.length - 1)
        setCategories(result)
      })
  }, [dispatch])
  return (
    <S.NavbarContainer>
      <S.MainNav>
        <S.NavMenuList>
          <S.NavMenuItem className="home-nav">
            <S.NavMenuLink to="">
              <FontAwesomeIcon icon={faHome} />
            </S.NavMenuLink>
          </S.NavMenuItem>
          {categories.map((category, index) => {
            return (
              <S.NavMenuItem key={index}>
                <S.NavMenuLink to={`${path.category}/${category}`}>
                  {category}
                </S.NavMenuLink>
              </S.NavMenuItem>
            )
          })}
          {categories.map((category, index) => {
            return (
              <S.NavMenuItem key={index}>
                <S.NavMenuLink to={`${path.category}/${category}`}>
                  {category}
                </S.NavMenuLink>
              </S.NavMenuItem>
            )
          })}
          {categories.map((category, index) => {
            return (
              <S.NavMenuItem key={index}>
                <S.NavMenuLink to={`${path.category}/${category}`}>
                  {category}
                </S.NavMenuLink>
              </S.NavMenuItem>
            )
          })}
          <S.NavMenuItem className="menu-button">
            <S.MenuButton to="">
              <span>Tất cả</span>
              <FontAwesomeIcon icon={faBars} />
            </S.MenuButton>
          </S.NavMenuItem>
        </S.NavMenuList>
      </S.MainNav>
    </S.NavbarContainer>
  )
}

export default Navbar
