import './App.css'

import { Routes, Route } from 'react-router-dom'

//providers
import { AuthContextProvider } from './contexts/authContext'

//components
import Topbar from './components/topbar/Topbar'
import Logout from './components/logout/Logout'

//pages
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  return (
    <AuthContextProvider>
      <Topbar />

      <Routes>
        <Route path='/' element={ <Home />} ></Route>
        <Route path='/profile/:userId' element={ <Profile />} ></Route>
        <Route path='/login' element={ <Login />} ></Route>
        <Route path='/register' element={ <Register />} ></Route>
        <Route path='/logout' element={ <Logout />} ></Route>
      </Routes>
    </AuthContextProvider>
  )
}

export default App
