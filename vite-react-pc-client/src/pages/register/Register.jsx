import './register.css'

import { Link } from 'react-router-dom'

import LoginRegisterLeftbar from '../../components/login-register-leftbar/LoginRegisterLeftbar'

export default function Register() {
  return (
    <div className="register-page-container">

      <div className="register-page-wrapper">

        <LoginRegisterLeftbar />

        <div className="register-rightside">
          <div className="register-box">
            <input className='registerInput' type="text" placeholder='Username' />
            <input className='registerInput' type="password" placeholder='Password' />
            <input className='registerInput' type="password" placeholder='Repeat Password' />

            <button className="registerButton">Register</button>

            <Link to='/login' className="RegisterLoginButton">Log into account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
