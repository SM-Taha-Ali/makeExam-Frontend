import React from 'react'
import "./testconduct.css"
import Header from '../Header'

const TestConduct = () => {
  return (
    <>
      <Header />
      {/*Login Modal*/}
      <div className="modal fade" id="login" role="dialog">
        <div className="modal-dialog  ">
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
                        onclick="userlogin()"
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
      TestConduct
    </>
  )
}

export default TestConduct