import './register.css'

import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

import { useForm } from '../../hooks/useForm'

import LoginRegisterLeftbar from '../../components/login-register-leftbar/LoginRegisterLeftbar'

export default function Register() {

  const { registerHandler } = useContext(AuthContext);

  const { formValues, onChange } = useForm({
    username: '',
    password: '',
    rePass: ''
  });

  async function formSubmit(e) {
    e.preventDefault();

    if(formValues.password != formValues.rePass) {
      return alert('Passwords don\'t match!');
    }

    try {
      await registerHandler(formValues.username, formValues.password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="register-page-container">

      <div className="register-page-wrapper">

        <LoginRegisterLeftbar />

        <div className="register-rightside">

          <form className="register-box" onSubmit={formSubmit}>
            <input className='registerInput'
              name='username'
              type="text" placeholder='Username'
              value={formValues.username}
              onChange={onChange} />
            <input className='registerInput'
              name='password'
              type="password"
              placeholder='Password' 
              value={formValues.password}
              onChange={onChange} />
            <input 
              className='registerInput' 
              name='rePass' 
              type="password" 
              placeholder='Repeat Password' 
              value={formValues.rePass}
              onChange={onChange} />

            <button className="registerButton">Register</button>

            <Link to='/login' className="RegisterLoginButton">Log into account</Link>
          </form>

        </div>
      </div>
    </div>
  )
}
