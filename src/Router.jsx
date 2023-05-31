import React from 'react'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Chat } from "./pages/Chat";
import { Profile } from "./pages/Profile";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CreateProfile } from './pages/CreateProfile';
import { SearchPage } from './pages/SearchPage';
import { Messages } from './pages/Messages';
import { EditProfile } from './pages/EditProfile';
import { FavoritesPage } from './pages/Favorites';
import { FollowerList } from './pages/FollowerList';
import { Seguidos } from './pages/Seguidos';
import { UpPost } from './components/UpPost';

export const Router = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<CreateProfile />}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chat/:id' element={<Chat></Chat>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/messages' element={<Messages />}></Route>
        <Route path='/edit' element={<EditProfile />}></Route>
        <Route path='/likes' element={<FavoritesPage></FavoritesPage>}></Route>
        <Route path='/seguidores' element={<FollowerList></FollowerList>}></Route>
        <Route path='/seguidos' element={<Seguidos></Seguidos>}></Route>
        <Route path='123' element={<UpPost></UpPost>}></Route>

        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
     
      </Routes>
    </>
  )
}
