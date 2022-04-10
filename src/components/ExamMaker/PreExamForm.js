import React, { useState, useRef } from 'react'
import Header from '../Header';
import Select from 'react-select';
import { Link, useNavigate } from "react-router-dom";


function Pre_exam_form() {

  const navigate = useNavigate()

  const boards = [
    { value: 'cambridge', label: 'Cambridge', name: "board" },
    { value: 'karachi', label: 'Karachi', name: "board" },
    { value: 'federal', label: 'Federal', name: "board" },
  ];

  const [board, setboard] = useState([])

  const onChange = (e) => {
    setboard({ ...board, [e.name]: e.value })
  }

  const proceed = (e) => {
    e.preventDefault()
    navigate("/exam-maker-success")
  }

  return (
    <>
      <Header />
      {/*Login Modal*/}
      <div className="modal fade" id="login" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal content no 1*/}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex flex-row justify-content-center">Login</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body padtrbl">
              <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="form-group">
                  <form name="" id="loginForm">
                    <div className="form-group has-feedback">
                      {/*--- username ------------*/}
                      <input
                        className="form-control"
                        placeholder="Username"
                        id="loginid"
                        type="text"
                        autoComplete="off"
                      />
                      <span
                        style={{
                          display: "none",
                          fontWeight: "bold",
                          position: "absolute",
                          color: "red",
                          padding: 4,
                          fontSize: 11,
                          backgroundColor: "rgba(128, 128, 128, 0.26)",
                          zIndex: 17,
                          right: 27,
                          top: 5,
                        }}
                        id="span_loginid"
                      />
                      {/*-Alredy exists  ! */}
                      <span className="glyphicon glyphicon-user form-control-feedback" />
                    </div>
                    <div className="form-group has-feedback">
                      {/*--- password ------------*/}
                      <input
                        className="form-control"
                        placeholder="Password"
                        id="loginpsw"
                        type="password"
                        autoComplete="off"
                      />
                      <span
                        style={{
                          display: "none",
                          fontWeight: "bold",
                          position: "absolute",
                          color: "grey",
                          padding: 4,
                          fontSize: 11,
                          backgroundColor: "rgba(128, 128, 128, 0.26)",
                          zIndex: 17,
                          right: 27,
                          top: 5,
                        }}
                        id="span_loginpsw"
                      />
                      {/*-Alredy exists  ! */}
                      <span className="glyphicon glyphicon-lock form-control-feedback" />
                    </div>
                    <div className="">
                      <div className="checkbox icheck">
                        <label>
                          <input type="checkbox" id="loginrem" /> Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-green btn-block btn-flat"
                      // onClick="userlogin()"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login Modal*/}
      <div className='container'>
        <h1 className="py-4 text-center text-success">Make Paper Template</h1>
        <form>
          <div className="row">
            <div className="col-md-4 p-3 pb-0">
              <label htmlFor="exampleIntName">Institution Name</label>
              <input type="text" className="form-control" id="exampleIntName" aria-describedby="emailHelp" placeholder="Enter Institution Name" />
            </div>
            <div className="col-md-4 p-3 pb-0">
              <label htmlFor="exampleExamName">Exam Name</label>
              <input type="text" className="form-control" id="exampleExamName" aria-describedby="emailHelp" placeholder="Enter Exam Name" />
            </div>
            <div className="col-md-4 p-3 pb-0">
              <label htmlFor="">Select Board</label>
              <div>
                <Select
                  defaultValue={null}
                  onChange={onChange}
                  options={boards}
                  width={100}
                  name="board"
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 p-3">
              <label htmlFor="exampleExamTime">Timings</label>
              <input type="text" className="form-control" id="exampleExamTime" aria-describedby="timingHelp" placeholder="Enter Timings" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="exampleTotalMarks">Total Marks</label>
              <input type="text" className="form-control" id="exampleTotalMarks" aria-describedby="totalmarksHelp" placeholder="Enter Total Marks" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="examplePaperName">Paper Name</label>
              <input type="text" className="form-control" id="examplePaperName" aria-describedby="emailHelp" placeholder="Enter Paper Name" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="examplePaperName">Date</label>
              <input type="date" className="form-control" id="examplePaperName" aria-describedby="emailHelp" placeholder="Enter Paper Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  mb-2">
              <label className="form-label" htmlFor="exampleInstructions">Instructions</label>
              <textarea className="form-control" id="exampleInstructions" rows="5" cols="70" defaultValue={""} />
            </div>
            <div className="col-md-6"></div>
          <div className="col-md-6 d-flex flex-row justify-content-end align-items-center">
              <button className="pre_button btn btn-success my-3" onClick={proceed}>Proceed <i className="fas ml-1 fa-arrow-right"></i> </button>
          </div>
          </div>
        </form>


      </div>


    </>
  )
}

export default Pre_exam_form
