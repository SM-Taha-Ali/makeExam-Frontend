import React, { useContext, useState, useEffect } from 'react'
import globalContext from "../../context/globalContext"
import "./examMaker.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import "./Mcqs"


const Preview = () => {
  const { questions, setQuestions, page, setPage, index, setIndex, preExam } = useContext(globalContext)

  const generatePDF = () => {
    let imgs = [];
    console.log(page)
    page.map((data, index) => {
      document.getElementById(`pdf_${index}`).style.display = 'block'
      imgs.push(document.getElementById(`pdf_${index}`))
    })
    //const imgs = [...document.querySelectorAll('.pdf')]
    const doc = new jsPDF()
    imgs.forEach((a, i) => {
      html2canvas(a)
        .then(canvas => {
          const img = canvas.toDataURL('image/png')
          var pdfWidth = doc.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          doc.addImage(img, 'PNG', 5, 5, pdfWidth, pdfHeight);
          if (imgs.length > (i + 1)) {
            doc.addPage()
          }
        })
        .then(() => {
          if ((i + 1) === imgs.length) {
            doc.save('exam.pdf')
          }
        })
    })
    page.map((data, index) => {
      document.getElementById(`pdf_${index}`).style.display = 'none'
    })
  }


  const prevPage = () => {
    let copyArray = [...page]
    copyArray[index] = questions
    setPage(copyArray)
    let newIndex = index - 1
    setIndex(index - 1)
    let array = copyArray[newIndex]
    setQuestions(array)
  }

  const nextpage = () => {
    console.log(index)
    let copyArray = page
    copyArray[index] = questions
    setPage(copyArray)
    setIndex(index + 1)
    if (copyArray[index + 1] == null) {
      setQuestions([])
    } else {
      setQuestions(copyArray[index + 1])
    }
  }

  const addPage = () => {
    let copyArray = page
    copyArray[index] = questions
    setPage(copyArray)
    let newIndex = index + 1
    setIndex(newIndex)
    if (copyArray[newIndex] == null) {
      setQuestions([])
    } else {
      setQuestions(copyArray[index])
    }
  }


  return (
    <div>
      <div className="preview mb-4 p-2">
        {page.map((data, ind) => {
          return (
            <div id={`pdf_${ind}`} className="pdf_hidden">
              {ind == 0 &&
                <>
                  <div contentEditable={true}>
                    <h4 contentEditable={true} className='text_black text-center'>{preExam.institute}</h4>
                    <p contentEditable={true} className='text_black text-center fs-4'>{preExam.exam_name}</p>
                    <h4 contentEditable={true} className='text_black text-center'>{preExam.paper_name}</h4>
                    <h5 contentEditable={true} className='text_black text-center'>REGULAR AND PRIVATE CANDIDATES</h5>
                  </div>
                  <div contentEditable={true}>
                    <div className="row" contentEditable={true}>
                      <div className="col-4 text-center"></div>
                      <div className="text_black col-4 text-center" contentEditable={true}><h6>SECTION "B"</h6></div>
                      <div className="text_black col-4 text-center" contentEditable={true}><h6>(45 marks)</h6></div>
                    </div>
                    <div className="row">
                      <div className="col-3 text-center"></div>
                      <div className="text_black col-6 text-center" contentEditable={true}><h6>SHORT QUESTION ANSWERS</h6></div>
                      <div className="col-3 text-center"><h6></h6></div>
                    </div>
                  </div>
                </>}
              {data.map((quest, idx) => {
                return <div className='row py-1' key={idx}>
                  <div className="text_black col-md-1 text-center" contentEditable={true}>{quest.qno}</div>
                  <div className="text_black col-md-9 text-wrap" contentEditable={true}>{quest.question}</div>
                  <div className="text_black col-md-2" contentEditable={true}>{quest.marks}</div>
                  {
                    quest.subQuestion.map((subP, sidx) => {
                      return <div className="row ms-1" key={sidx}>
                        <div className="text_black col-md-1 text-center">{subP.qno}</div>
                        <div className="text_black col-md-11 text-wrap">{subP.question}</div>
                        {
                          subP.subFurther.map((subfr, fidx) => {
                            return <div className="row ms-1" key={fidx}>
                              <div className="text_black col-md-1 text-center">{subfr.qno}</div>
                              <div className="text_black col-md-11 text-wrap">{subfr.question}</div>
                            </div>
                          })
                        }
                      </div>
                    })
                  }
                </div>
              })}
            </div>)
        })}
        <div id="pdf" className="pdf">
          {(index == 0) && <>
            <div contentEditable={true}>
              <h4 className='text-center' contentEditable={true}>{preExam.institute}</h4>
              <p className='text-center fs-4'>{preExam.exam_name}</p>
              <h4 className='text-center'>{preExam.paper_name}</h4>
              <h5 className='text-center' contentEditable={true}>REGULAR AND PRIVATE CANDIDATES</h5>
            </div>
            <div>
              <div className="row">
                <div className="col-4 text-center"></div>
                <div className="col-4 text-center" contentEditable={true}><h6>SECTION "B"</h6></div>
                <div className="col-4 text-center"><h6>(45 marks)</h6></div>
              </div>
              <div className="row">
                <div className="col-3 text-center"></div>
                <div className="col-6 text-center"><h6>SHORT QUESTION ANSWERS</h6></div>
                <div className="col-3 text-center"><h6></h6></div>
              </div>
            </div>
          </>}
          {questions.map((quest, idx) => {
            return <div className='row py-1' key={idx}>
              <div className="col-md-1 text-center" contentEditable={true}>{quest.qno}</div>
              <div className="col-md-9 text-wrap" contentEditable={true}>{quest.question}</div>
              <div className="col-md-2" contentEditable={true}>{quest.marks}</div>
              {
                quest.subQuestion.map((subP, sidx) => {
                  return <div className="row ms-1" key={sidx}>
                    <div className="col-md-1 text-center">{subP.qno}</div>
                    <div className="col-md-11 text-wrap">{subP.question}</div>
                    {
                      subP.subFurther.map((subfr, fidx) => {
                        return <div className="row ms-1" key={fidx}>
                          <div className="col-md-1 text-center">{subfr.qno}</div>
                          <div className="col-md-11 text-wrap">{subfr.question}</div>
                        </div>
                      })
                    }
                  </div>
                })
              }
            </div>
          })}
        </div>
        <div className='pageNum'>
          {index + 1}
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between pb-3">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-success" onClick={prevPage} disabled={false} ><i className="fas fa-angle-left"></i></button>
          <button type="button" className="btn btn-outline-success" onClick={nextpage} disabled={false}><i className="fas fa-angle-right"></i></button>
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={addPage}><i className="fas fa-plus-circle mr-1"></i>  Add Page</button>
          <button className="btn btn-success" onClick={generatePDF}><i className="fas mr-2 fa-check"></i>Generate Paper</button>
        </div>
      </div>
    </div>
  )
}

export default Preview