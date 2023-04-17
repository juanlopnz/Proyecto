// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Search } from "./components/Search";
// import './index.css'
// import { Login } from './pages/Login';
// import { CreateProfile } from './pages/CreateProfile';
// import { Sidebar } from './Components/SideBar';
// import { Profile } from './pages/Profile';
// import { Seguidores } from './pages/followers';

import { ChatPage } from './pages/Chat';
import { Profiler, ReactDOM } from 'react';
import { Login } from './pages/Login';
import { App } from './App';
import ReactDOM from "react-dom" 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);