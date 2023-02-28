import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/Madre' element={'jjjjjj'}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
