import React, { useState, useContext } from 'react'
import "./ExamMaker/examMaker.css"
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import globalContext from '../context/globalContext';
import Login from './Login';


const Register = () => {
    const context = useContext(globalContext)
    const {loginModal} = context

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpassword: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const host = `http://localhost:8000`

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${host}/api/auth/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: credentials.firstname,
                lastname: credentials.lastname,
                email: credentials.email,
                password: credentials.password,
            })
        });
        const json = await response.json();
        console.log(json);

        if (json.success){
            loginModal.current.click()
        } else{
            alert('Invalid credentials')
        }
        

    }

    return (
        <div>
            <Header />
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-md-5 pe-5">
                        <h3 className='pb-4 text-success'>REGISTER NOW</h3>
                        <div className="">
                            <form>
                                <div className="row">
                                    <div className="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">First Name</label>
                                            <input type="text" className="form-control" onChange={onChange} id="exampleInputtext1" name='firstname' />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputtext2" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" onChange={onChange} id="exampleInputtext2" name='lastname' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" onChange={onChange} id="exampleInputPassword1" name='password' />
                                        </div>
                                    </div>
                                </div>

                                <div className='py-4'> 
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Register Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="banner p-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register