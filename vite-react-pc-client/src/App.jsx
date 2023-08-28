import './App.css'

import { Routes, Route } from 'react-router-dom'

//components
import Topbar from './components/topbar/Topbar'

//pages
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  return (
    <>
      <Topbar />

      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/profile' element={ <Profile />}></Route>
        <Route path='/login' element={ <Login />}></Route>
        <Route path='/register' element={ <Register />}></Route>
      </Routes>
    </>
  )
}

export default App
