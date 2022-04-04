import React, { useState, useRef } from 'react'
import "./examMaker.css"
import Header from '../Header'
import Sidepane from "./Sidepane"
import Preview from "./Preview"
import Select from 'react-select';
import globalContext from "../../context/globalContext"

const ExamMaker = () => {

  const pastPaperRef = useRef(null)
  const questionBankRef = useRef(null)

  const bankpapers = [
    { value: 'multipart', label: 'Multi-Part', name: "bankpaper" },
    { value: 'single', label: 'Single', name: "bankpaper" },
    { value: 'mcq', label: 'MCQ', name: "bankpaper" },
  ];

  const [bankQuest, setbankQuest] = useState({ bankpaper: "" })

  const onChange = (e) => {
    setbankQuest({ ...bankQuest, [e.name]: e.value })
  }

  const pastRef = () => {
    pastPaperRef.current.click();
  }

  const [selectedQuest, setselectedQuest] = useState([])
  const [currentQuest, setcurrentQuest] = useState({question:"", part:[]})

  const questRef = () => {
    questionBankRef.current.click();
  }

  const [dfltval, setdfltval] = useState([])

  const [checkedClass, setcheckedClass] = useState(false)

  const addDefaultVal = (e) => {
    console.log();
    setcheckedClass(true)
    // setcurrentQuest(...currentQuest, {question:`${(((e.target).parentNode).previousElementSibling).childNodes[0].textContent}`, part:`${(((e.target).parentNode).previousElementSibling).childNodes[x].textContent}`})
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


      {/* Past Papers Modal */}

      <div>
        <button ref={pastPaperRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Past Papers</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="mb-4 row">
                  <div className="col-md-8">
                    <div className="input-group mb-3 search_box">
                      <input type="text" className="form-control" placeholder="Search questions..." aria-label="Username" aria-describedby="basic-addon1" />
                      <span className="input-group-text bg_default" id="basic-addon1"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <Select
                        defaultValue={null}
                        onChange={onChange}
                        options={bankpapers}
                        width={100}
                        name="bankpaper"
                        placeholder="Question Type"
                      />
                    </div>
                  </div>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Question</th>
                      <th scope="col" className='text-center'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <p className='text-wrap'>
                          How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                        <p className='text-wrap'>
                          (i) How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                        <p className='text-wrap'>
                          (ii) How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                      </td>
                      <td className='text-center'>
                        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
                        <label class="btn btn-outline-success" for="btn-check-outlined" onClick={addDefaultVal}><i class="fas fa-check-circle"></i></label><br></br>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <p className='text-wrap'>
                          How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                      </td>
                      <td className='text-center'>
                        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
                        <label class="btn btn-outline-success" for="btn-check-outlined" onClick={addDefaultVal}><i class="fas fa-check-circle"></i></label><br></br>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal"><i className="fas fa-plus-circle mr-1"></i> Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Papers Modal */}

      {/* Question Bank Modal */}

      <div>
        <button ref={questionBankRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
          Launch static backdrop modal
        </button>

        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">My Question Bank</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="mb-4 row">
                  <div className="col-md-8">
                    <div className="input-group mb-3 search_box">
                      <input type="text" className="form-control" placeholder="Search questions..." aria-label="Username" aria-describedby="basic-addon1" />
                      <span className="input-group-text bg_default" id="basic-addon1"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <Select
                        defaultValue={null}
                        onChange={onChange}
                        options={bankpapers}
                        width={100}
                        name="bankpaper"
                        placeholder="Question Type"
                      />
                    </div>
                  </div>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Question</th>
                      <th scope="col" className='text-center'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <p className='text-wrap'>
                          How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                      </td>
                      <td className='text-center'>
                        <button className="btn btn-outline-success" onClick={addDefaultVal}><i className="fas fa-plus-circle"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <p className='text-wrap'>
                          How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                      </td>
                      <td className='text-center'>
                        <button className="btn btn-outline-success" onClick={addDefaultVal}><i className="fas fa-plus-circle"></i></button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <p className='text-wrap'>
                          How did Pakistan came into being? Who was the founder of Pakistan? Write briefly.
                        </p>
                      </td>
                      <td className='text-center'>
                        <button className={`btn ${checkedClass ? "btn-success" : "btn-outline-success"}`} onClick={addDefaultVal}><i className="fas fa-plus-circle"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Bank Modal */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 p-4">
            <div className="my-3">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-success" onClick={pastRef}>Past Papers</button>
                <button type="button" className="btn btn-outline-success" onClick={questRef}>Question Bank</button>
                <button type="button" className="btn btn-outline-success">Upload Image</button>
              </div>
            </div>
            <Sidepane dfltval={dfltval} setdfltval={setdfltval} />
          </div>
          <div className="col-md-7 p-4">
            <Preview />
          </div>
        </div>
      </div>

    </>
  )
}

export default ExamMaker