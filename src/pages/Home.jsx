import React from 'react'
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";
import { PostList } from "../components/PostsList";
import { Story } from "../components/Story";

export const Home = () => {
  return (
    <div>
      <div className=''>
        <div className="flex flex-row gap-[50px] fixed left-0 right-0 top-0 z-10 bg-white shadow">
          <div>
            <SideBar></SideBar>
          </div>
          <div className="">
            <Story className=""></Story>
          </div>
        </div>
        <div className='mt-[66px]'>
          <PostList></PostList>
        </div>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

//Pagina de inicio