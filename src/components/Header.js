import React, { useEffect, useRef, useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actionCreators } from "../state/index"
import { useSelector } from 'react-redux';
import Register from './Register';
import globalContext from '../context/globalContext';

const Header = () => {
    const isAuthenticated = useSelector(state => state.auth)

    const context = useContext(globalContext)
    const { loginModal, loginStatus, setloginStatus, getUserDetails, details, setdetails } = context

    const dispatch = useDispatch()


    const token = localStorage.getItem('token')

    useEffect(() => {
        async function fetchData() {
            let userDetails = await getUserDetails(token)
            setdetails(userDetails)
        } fetchData()
    }, [])



    const logout = async () => {
        localStorage.clear()
        dispatch(actionCreators.authLogout())
        window.location.reload()
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light navbar navbar-default navbar-fixed-top">
            <Link className="navbar-brand" to="/">
                MYEXAM<span>-MAKER</span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className='d-flex flex-column justify-content-center'>
                        <a href="/#feature">Features</a>
                    </li>
                    <li className='d-flex flex-column justify-content-center'>
                        <Link to="/exam-maker">Exam-Maker</Link>
                    </li>
                    <li className='d-flex flex-column justify-content-center'>
                        <Link to="/test-conduct">Test-Conduct</Link>
                    </li>
                    <li className='d-flex flex-column justify-content-center'>
                        <a href="/#pricing">Pricing</a>
                    </li>
                    {!isAuthenticated ?
                        <li className='d-flex flex-column justify-content-center'>
                            <Link to="/login">Sign in</Link>
                        </li>
                        :
                        <li className="dropdown">
                            <button className="dropbtn"><i class="fas fa-user me-1"></i> {details.lastname}</button>
                            <div className="dropdown-content">
                                {(details.role == "admin") ?
                                    <Link to="/admin/pastpapers"><i class="fas fa-unlock-alt me-2"></i> Admin</Link>
                                    : ""
                                }
                                <span onClick={logout}><i class="fas fa-sign-out-alt me-1"></i> Logout</span>
                            </div>
                        </li>
                    }
                    {/* <li className="btn-trial">
                        <a href="#footer">Free Trail</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header