import React from 'react'
import { SideBar } from '../components/SideBar'
import { NavBar } from '../components/NavBar'
import { PostList } from '../components/PostsList'


export const FavoritesPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row gap-4 bg-white shadow">
        <div>
          <SideBar></SideBar>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
        <div className="sm:col-span-0 md:col-span-1">
          <PostList></PostList>
        </div>
        <div className="sm:col-span-1 ">
          <PostList></PostList>
        </div>
        <div className="sm:col-span-1 ">
          <PostList></PostList>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  )
}





