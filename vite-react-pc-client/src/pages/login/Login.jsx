import './login.css'

import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

import { useForm } from '../../hooks/useForm'

import LoginRegisterLeftbar from '../../components/login-register-leftbar/LoginRegisterLeftbar'

export default function Login() {

  const { loginHandler } = useContext(AuthContext);

  const { formValues, onChange } = useForm({
    username: '',
    password: ''
  });

  async function formSubmit(e) {
    e.preventDefault();

    try {
      await loginHandler(formValues.username, formValues.password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="login-page-container">

      <div className="login-page-wrapper">

        <LoginRegisterLeftbar />

        <div className="login-rightside">
          <form className="login-box" onSubmit={formSubmit}>
            <input className="loginInput"
              type="text" 
              placeholder="Username" 
              name="username"
              value={formValues.username}
              onChange={onChange}/>
            <input 
              className="loginInput" 
              type="password" 
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={onChange}/>

            <button className="loginButton">Log In</button>

            <Link to="/register" className="loginRegisterButton">Create new account</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
