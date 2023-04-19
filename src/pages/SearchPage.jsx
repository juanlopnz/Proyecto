import React from 'react'
import { Search } from "../components/Search";
import { PhotoGallery } from "../components/PhotoGallery";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";

export const SearchPage = () => {
  return (
    <div className=''>
      <div className="flex flex-row gap-9 fixed left-0 right-0 top-0 z-40 bg-white shadow">
        <div>
          <SideBar></SideBar>
        </div>
        <div className="w-full">
          <Search></Search>
        </div>
      </div>
      <div className='mt-[76px]'>
        <PhotoGallery></PhotoGallery>
      </div>
      <NavBar></NavBar>
    </div>
  )
}
