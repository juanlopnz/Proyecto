import './index.css'
import { Routes } from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import { Router } from "./Router";
import { Login } from './pages/Login'
import { NavBar } from './components/NavBar'
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Followers } from "./pages/Followers";

export function App() {

  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  )
}


