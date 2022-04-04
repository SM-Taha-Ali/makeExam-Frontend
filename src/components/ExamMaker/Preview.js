import React, {useContext} from 'react'
import globalContext from "../../context/globalContext"

const Preview = () => {
  const { question } = useContext(globalContext)

  return (
    <div>
      <div className="preview mb-4 p-2">
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
        <div>
          <p className='fs-6 text-nowrap'>Q.2  Answer any FIVE of the following question in two or three lines each. (10marks)</p>
          {question.map((item, key)=>{
            return <p className='text-nowrap' >{key=key+1}. {item}</p>
          })}
        </div>
      </div>

      <div className="d-flex flex-row justify-content-end">
        <button className="btn btn-success"><i class="fas mr-2 fa-check"></i>Generate Paper</button>
      </div>
    </div>
  )
}

export default Preview