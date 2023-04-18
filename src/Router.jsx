import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Chat } from "./pages/Chat";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chat' element={<Chat></Chat>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  )
}
