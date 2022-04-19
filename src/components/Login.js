import React, { useState, useRef, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { actionCreators } from "../state/index"
import classes from "./login.module.css"
import globalContext from '../context/globalContext';
import Header from './Header';

const Login = () => {
  const closeModal = () => {
    closeBtn.current.click()
  }

  const dispatch = useDispatch()

  const context = useContext(globalContext)
  const { loginModal, loginStatus, setloginStatus, getUserDetails } = context

  const closeBtn = useRef(null)

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const [Loading, setLoading] = useState(false);

  const host = `http://localhost:8000`

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      localStorage.setItem('isAuthenticated', true)
      dispatch(actionCreators.authLogin())
      const token = localStorage.getItem('token')
      let userDetails = await getUserDetails(token)
      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <Header />
      <div className="d-flex flex-row justify-content-center">
        <div className={classes.login_container}>
            <div className="p-5 shadow rounded">
              <h1 className='pb-4 text-success text-center'>MYEXAM-MAKER</h1>
              <div className="pt-2">
                <form>
                  <div className="row">
                    <div className="input-group mb-4">
                      <span className="input-group-text text-success bg_default_light" id="basic-addon1"><i className="fas fa-user"></i></span>
                      <input type="email" className="form-control" placeholder='Username' onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text text-success bg_default_light" id="basic-addon2"><i className="fas fa-key"></i></span>
                      <input type="password" className="form-control" placeholder='Password' onChange={onChange} id="exampleInputPassword1" name='password' />
                    </div>
                  </div>

                  <div className='row py-4'>
                    <div className="col-md-6">
                      <Link to="/register">Don't have account?</Link>
                    </div>
                    <div className="col-md-6 text-end">
                      <a href=''>Forgot Password?</a>
                    </div>
                  </div>

                  <div className="py-3">
                    <button type="submit" className={`${classes.googleBtn} btn btn-success`} onClick={handleLogin}>Login</button>
                  </div>

                  <h3 className='py-3 text-success text-center'>OR</h3>

                  <div className='py-3'>
                    <button type="submit" className={`${classes.googleBtn} btn btn-outline-success`} onClick={handleLogin}><i className="fab fa-google me-2"></i> Sign in with Google</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login