import React, { useState, useContext, useRef } from 'react'
import "./examMaker.css"
import Header from '../Header'
import Sidepane from "./Sidepane"
import Preview from "./Preview"
import Select from 'react-select';
// import globalContext from "../../context/globalContext"
import globalContext from '../../context/globalContext'
import Login from '../Login'
import O_Levels from './cambridege/O_Levels'

const ExamMaker = () => {

  const { questions, setQuestions } = useContext(globalContext)

  const pastPaperRef = useRef(null)
  const questionBankRef = useRef(null)

  const sections = [
    { value: 'Section-A', label: 'Section-A', name: "section" },
    { value: 'Section-B', label: 'Section-B', name: "section" },
    { value: 'Section-C', label: 'Section-C', name: "section" },
  ];
  const years = [
    { value: '2015', label: '2015', name: "year" },
    { value: '2016', label: '2016', name: "year" },
    { value: '2017', label: '2017', name: "year" },
    { value: '2018', label: '2018', name: "year" },
    { value: '2019', label: '2019', name: "year" },
    { value: '2020', label: '2020', name: "year" },
    { value: '2021', label: '2021', name: "year" },
  ];

  const [bankQuest, setbankQuest] = useState({ bankpaper: "" })

  const onChange = (e) => {
    setbankQuest({ ...bankQuest, [e.name]: e.value })
  }

  const pastRef = () => {
    pastPaperRef.current.click();
  }

  const [selectedQuest, setselectedQuest] = useState([])
  const [currentQuest, setcurrentQuest] = useState({ question: "", part: [] })

  const questRef = () => {
    questionBankRef.current.click();
  }

  const [dfltval, setdfltval] = useState([])

  const [checkedClass, setcheckedClass] = useState(false)

  const pastQuestions = [
    {
      id: 1,
      year: 2017,
      section: "A",
      marks: "12",
      question: "pehlaHow did Pakistan came into being? Who was the founder of Pakistan? Write briefly.",
      subQuestion: [
        { question: "ok this is subpart",
         subFurther: [
          { question: "ok this is subpart" }
        ] }
      ]
    },
    {
      id: 2,
      year: 2017,
      section: "A",
      marks: "12",
      question: "dusraHow did Pakistan came into being? Who was the founder of Pakistan? Write briefly.",
      subQuestion: [{ question: "ok this is subpart", subFurther: [{ question: "ok this is subpart" }] }]
    },
    {
      id: 3,
      year: 2017,
      section: "A",
      marks: "12",
      question: "teesraHow did Pakistan came into being? Who was the founder of Pakistan? Write briefly.",
      subQuestion: [{ question: "ok this is subpart", subFurther: [{ question: "ok this is subpart" }] }]
    },
    {
      id: 4,
      year: 2017,
      section: "A",
      marks: "12",
      question: "chohtaHow did Pakistan came into being? Who was the founder of Pakistan? Write briefly.",
      subQuestion: [{ question: "ok this is subpart", subFurther: [{ question: "ok this is subpart" }] }]
    },
  ]

  const addDefaultVal = (e) => {
    setcheckedClass(true)
    // setcurrentQuest(...currentQuest, {question:`${(((e.target).parentNode).previousElementSibling).childNodes[0].textContent}`, part:`${(((e.target).parentNode).previousElementSibling).childNodes[x].textContent}`})
  }

  var checkedQuestions = []

  const handleChange = (e) => {
    if (e.target.checked) {
      checkedQuestions.push(e.target.dataset.id)
    }
  }

  const addQuestionToPreview = () => {
    let pastPaperQuest = [...questions]
    checkedQuestions.forEach((id) => {
      let count = 0
      pastQuestions.map((question) => {
        if (question.id == id) {
          pastPaperQuest.push(question)
        }
      })
    })
    setQuestions(pastPaperQuest)
    let checkboxes = document.getElementsByName("add_question")
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  return (
    <>
      <Header />
      
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
                  <div className="col-md-4">
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
                        options={sections}
                        width={100}
                        name="section"
                        placeholder="Section"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <Select
                        defaultValue={null}
                        onChange={onChange}
                        options={years}
                        width={100}
                        name="year"
                        placeholder="Year"
                      />
                    </div>
                  </div>
                </div>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Question</th>
                      <th scope="col" className=''>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pastQuestions.map((question, i) => {
                        return <tr>
                          <td>{i + 1}</td>
                          <td>
                            <p className='text-wrap'>
                              {question.question}
                            </p>
                            {question.subQuestion.map((subPart, j) => {
                              return <p className='text-wrap ms-1'>
                                {j} {subPart.question}
                                {subPart.subFurther.map((subFur, k) => {
                                  <p className='text-wrap ms-2'>
                                    {k} {subFur.question}
                                  </p>
                                })}
                              </p>
                            })}
                          </td>
                          <td className='text-center'>
                            {/* <input className="form-check-input chkbox" type="checkbox" value="" id="flexCheckDefault" /> */}
                            <input type="checkbox" className="btn-check" name='add_question' id={`btncheck${i}`} data-id={question.id} onChange={handleChange} autoComplete="off" />
                            <label className="btn btn-outline-success" htmlFor={`btncheck${i}`}><i className="fas fa-check-circle"></i></label>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={addQuestionToPreview}><i className="fas fa-plus-circle mr-1"></i> Add</button>
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
                        options={sections}
                        width={100}
                        name="section"
                        placeholder="Section"
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
                    {
                      pastQuestions.map((question, i) => {
                        return <tr>
                          <td>{i + 1}</td>
                          <td>
                            <p className='text-wrap'>
                              {question.question}
                            </p>
                            {question.subQuestion.map((subPart, j) => {
                              return <p className='text-wrap ms-1'>
                                {j} {subPart.question}
                                {subPart.subFurther.map((subFur, k) => {
                                  <p className='text-wrap ms-2'>
                                    {k} {subFur.question}
                                  </p>
                                })}
                              </p>
                            })}
                          </td>
                          <td className='text-center'>
                            {/* <input className="form-check-input chkbox" type="checkbox" value="" id="flexCheckDefault" /> */}
                            <input type="checkbox" className="btn-check" name='add_question' id={`btncheck${i}`} data-id={question.id} onChange={handleChange} autoComplete="off" />
                            <label className="btn btn-outline-success" htmlFor={`btncheck${i}`}><i className="fas fa-check-circle"></i></label>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={addQuestionToPreview}><i className="fas fa-plus-circle mr-1"></i> Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Bank Modal */}

      <div className="container-fluid">
        <div className="d-flex flex-row flex-wrap justify-content-between">
          <div className="sidepane_wrapper">
            <div className="my-3">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-success" onClick={pastRef}>Past Papers</button>
                <button type="button" className="btn btn-outline-success" onClick={questRef}>Question Bank</button>
                <button type="button" className="btn btn-outline-success">Upload Image</button>
              </div>
            </div>
            <Sidepane/>
          </div>
          <div className="preview_wrapper pt-4">
            {/* <Preview /> */}
            <O_Levels/>
          </div>
        </div>
      </div>

    </>
  )
}

export default ExamMaker