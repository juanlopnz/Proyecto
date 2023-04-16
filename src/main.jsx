import React from 'react'
import ReactDOM from 'react-dom/client'
import { Search } from "./components/Search";
import './index.css'
import { Login } from './pages/Login';
import { CreateProfile } from './pages/CreateProfile';
import { Sidebar } from './Components/SideBar';
import { Profile } from './pages/Profile';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile></Profile>
  </React.StrictMode>
)
