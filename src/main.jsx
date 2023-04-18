<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from "./App"
import './index.css'
=======
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Search } from "./components/Search";
// import './index.css'
// import { Login } from './pages/Login';
// import { CreateProfile } from './pages/CreateProfile';
// import { Sidebar } from './Components/SideBar';
// import { Profile } from './pages/Profile';
// import { Seguidores } from './pages/followers';
>>>>>>> c164e49dd09a1402194bc07beb94d8011c1ced49

import { ChatPage } from './pages/Chat';
import { Profiler, ReactDOM } from 'react';
import { Login } from './pages/Login';
import { App } from './App';
import ReactDOM from "react-dom" 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);