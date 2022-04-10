import React, { useContext } from 'react'
import globalContext from "../../context/globalContext"
import "./examMaker.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Preview = () => {
  const { questions } = useContext(globalContext)

  const generatePDF = () => {
    var downloading = document.getElementById("pdf");
    var doc = new jsPDF("p", "pt", "a4");

    html2canvas(downloading)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            var width = pdf.internal.pageSize.getWidth();
            var imgHeight = canvas.height * width / canvas.width;
            pdf.addImage(imgData, 'PNG', 5, 5, width, imgHeight);
            pdf.save("exam.pdf");
        });
  }

  

  return (
    <div>
      <div className="preview mb-4 p-2">
        <div id="pdf">
          <div>
            <h4 className='text-center'>MODEL QUESTION PAPER</h4>
            <p className='text-center fs-4'>S.S.C ANNUAL EXAMINATION 2022</p>
            <h4 className='text-center'>ENGLISH COMPULSORY</h4>
            <h5 className='text-center'>REGULAR AND PRIVATE CANDIDATES</h5>
          </div>
          <div>
            <div className="row">
              <div className="col-4 text-center"></div>
              <div className="col-4 text-center"><h6>SECTION "B"</h6></div>
              <div className="col-4 text-center"><h6>(45 marks)</h6></div>
            </div>
            <div className="row">
              <div className="col-3 text-center"></div>
              <div className="col-6 text-center"><h6>SHORT QUESTION ANSWERS</h6></div>
              <div className="col-3 text-center"><h6></h6></div>
            </div>
          </div>
          {questions.map((quest, idx) => {
            return <div className='row py-1' key={idx}>
              <div className="col-md-1 text-center">{quest.qno}</div>
              <div className="col-md-9 text-wrap">{quest.question}</div>
              <div className="col-md-2">{quest.marks}</div>
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
      </div>
      <div className="d-flex flex-row justify-content-end">
        <button className="btn btn-success" onClick={generatePDF}><i className="fas mr-2 fa-check"></i>Generate Paper</button>
      </div>
    </div>
  )
}

export default Preview