import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}
