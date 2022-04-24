import React, { useState, useContext } from 'react'
import Header from '../Header';
import Select from 'react-select';
import { Link, useNavigate } from "react-router-dom";
import globalContext from "../../context/globalContext"


function Pre_exam_form() {
  const { preExam, setpreExam ,saveToLocal} = useContext(globalContext)

  const navigate = useNavigate()

  const boards = [
    { value: 'cambridge', label: 'Cambridge', name: "board" },
    { value: 'karachi', label: 'Karachi', name: "board" },
    { value: 'federal', label: 'Federal', name: "board" },
  ];

  const subjects = [
    { value: 'isl', label: 'Islamiat', name: "subject" },
    { value: 'english', label: 'English', name: "subject" },
    { value: 'math', label: 'Math', name: "subject" },
    { value: 'pst', label: 'PST', name: "subject" },
    { value: 'urdu', label: 'Urdu', name: "subject" },
    { value: 'chem', label: 'Chemistry', name: "subject" },
    { value: 'phy', label: 'Physics', name: "subject" },
  ];

  const [credentials, setCredentials] = useState({ institute: "", exam_name: "", timings: "", total_marks: "", paper_name: "", date: "", instructions: "", board: "", subject: "" });

  const onChange = (e) => {
    try {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    } catch (error) {
      setCredentials({ ...credentials, [e.name]: e.value })
    }
  }
  const Karachiobj = {
    instituteName: "dxf" ,
    examName: "sedzf" , 
    paperName : "sfedf" ,  
    // instituteName: preExam.institute ,
    // examName: preExam.exam_name , 
    // paperName : preExam.paper_name ,  
    candidate:'REGULAR AND PRIVATE CANDIDATES',
    section:'Section B',
    marks:"(45 marks)"
  }

  const CambridgeOlevels = {
    paperName : "COMPUTER SCIENCE",
    paperType:"Paper 2 Problem-solving and Programming",
    instructions:"You must answer on the question paper.",
    instructions_2 :"No additional materials are needed.",
    code:"2210/21",
    date:"May/June 2021",
    time:"1 hour 45 minutes"
  }

    

  const proceed = (e) => {
    e.preventDefault()
    setpreExam(credentials)
    navigate("/exam-maker-success")
    // console.log(preExam.exam_name)
    // localStorage.setItem("Credentials",JSON.stringify(Karachiobj))
    localStorage.setItem("Credentials",JSON.stringify(CambridgeOlevels))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <h1 className="py-4 text-center text-success">Make Paper Template</h1>
        <form>
          <div className="row">
            <div className="col-md-6 p-3 pb-0">
              <label htmlFor="exampleIntName">Institution Name</label>
              <input type="text" className="form-control" name='institute' onChange={onChange} id="exampleIntName" aria-describedby="emailHelp" placeholder="Enter Institution Name" />
            </div>
            <div className="col-md-6 p-3 pb-0">
              <label htmlFor="exampleExamName">Exam Name</label>
              <input type="text" className="form-control" name='exam_name' onChange={onChange} id="exampleExamName" aria-describedby="emailHelp" placeholder="Enter Exam Name" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6 p-3">
              <label htmlFor="exampleExamTime">Timings</label>
              <input type="text" className="form-control" name='timings' onChange={onChange} id="exampleExamTime" aria-describedby="timingHelp" placeholder="Enter Timings" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="exampleTotalMarks">Total Marks</label>
              <input type="text" className="form-control" name='total_marks' onChange={onChange} id="exampleTotalMarks" aria-describedby="totalmarksHelp" placeholder="Enter Total Marks" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="examplePaperName">Paper Name</label>
              <input type="text" className="form-control" name='paper_name' onChange={onChange} id="examplePaperName" aria-describedby="emailHelp" placeholder="Enter Paper Name" />
            </div>
            <div className="col-md-6 p-3">
              <label htmlFor="examplePaperName">Date</label>
              <input type="date" className="form-control" name='date' onChange={onChange} id="examplePaperName" aria-describedby="emailHelp" placeholder="Enter Paper Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-3 pb-0">
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
            <div className="col-md-6 p-3 pb-0">
              <label htmlFor="">Select Subject</label>
              <div>
                <Select
                  defaultValue={null}
                  onChange={onChange}
                  options={subjects}
                  width={100}
                  name="subject"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  mb-2">
              <label className="form-label" htmlFor="exampleInstructions">Instructions</label>
              <textarea className="form-control" name='instructions' onChange={onChange} id="exampleInstructions" rows="5" cols="70" defaultValue={""} />
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
