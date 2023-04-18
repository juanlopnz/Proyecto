import './index.css'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { NavBar } from './components/NavBar'
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Followers } from "./pages/Followers";

export function App() {

  return (
    <BrowserRouter>
      
      {/* <NavBar></NavBar> */}

      {/* <Profile></Profile> */}

      {/* <Followers></Followers> */}

      <Home></Home>


      {/* <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes> */}
    </BrowserRouter>
  )
}


