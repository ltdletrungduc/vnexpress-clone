import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ScrollButton from 'components/ScrollButton'

function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollButton />
    </>
  )
}

export default MainLayout
