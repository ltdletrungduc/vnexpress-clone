import CategoryDetail from 'pages/CategoryDetail'
import PostDetail from 'pages/PostDetail'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { path } from './constant/path'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function MainRoutes() {
  return (
    <Routes>
      <Route path={path.home} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="category">
          <Route index element={<Navigate to={path.home} />} />
          <Route path=":categoryId" element={<CategoryDetail />} />
        </Route>
        <Route path="post">
          <Route index element={<Navigate to={path.home} />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRoutes
