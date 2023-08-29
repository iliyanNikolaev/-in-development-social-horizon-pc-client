import './login.css'

import { Link } from 'react-router-dom'

import LoginRegisterLeftbar from '../../components/login-register-leftbar/LoginRegisterLeftbar'

export default function Login() {
  return (
    <div className="login-page-container">

      <div className="login-page-wrapper">

        <LoginRegisterLeftbar />

        <div className="login-rightside">
          <div className="login-box">
            <input className='loginInput' type="text" placeholder='Username' />
            <input className='loginInput' type="password" placeholder='Password' />

            <button className="loginButton">Log In</button>

            <Link to='/register' className="loginRegisterButton">Create new account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
