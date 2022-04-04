import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"

const Sidepane = (props) => {
    const { dfltval, setdfltval } = props
    const { question, questionLagao, subpart, addPart, clearPart, nestedsubpart, addNestPart, deletePart, deleteNestPart } = useContext(globalContext)

    const input = useRef(null)

    const addQuestion = () => {
        questionLagao(dfltval)
        console.log(question)
        clearPart()
        setdfltval("")
    }

    const addSubPart = () => {
        addPart("x")
    }

    const addNestSubPart = () => {
        console.log(nestedsubpart)
        addNestPart("x")
    }

    const handlekeyDown = e => {
        // console.log("key pressed")
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
            addQuestion()
        }

    }


    return (
        <>
            <div className="p-4 question_maker_border">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className='pr-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className='pl-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">Question</label>
                <textarea className="form-control" ref={input} onKeyDown={handlekeyDown} id="question" value={dfltval} onChange={(e) => setdfltval(e.target.value)} placeholder="Enter your question here..." rows="6"></textarea>
                {subpart.map((part, i) => {
                    return <div className='my-3 p-3 question_maker_border'>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder={`Sub-Part ${i + 1}`} rows="4"></textarea>
                        <div className='text-end pt-3'> 
                        <button className="btn btn-outline-danger mr-2" onClick={deletePart}><i class="fas fa-trash mr-2"></i>Sub-Part</button>
                        <button className="btn btn-outline-success mr-2" onClick={addNestSubPart}><i className="fas fa-plus-circle mr-2"></i>Sub-Part</button>
                        </div>
                        {nestedsubpart.map((j) => {
                            return <div className='my-3 p-3 question_maker_border'>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder={`Sub-Part ${j + 1}`} rows="4"></textarea>
                            <div className='text-end pt-3'> 
                            <button className="btn btn-outline-danger mr-2" onClick={deleteNestPart}><i class="fas fa-trash mr-2"></i>Sub-Part</button>
                            </div>
                        </div>
                        })}
                    </div>
                })}

                <div className='d-flex flex-row justify-content-end pt-3'>
                    <button className="btn btn-success mr-2" onClick={addSubPart}><i className="fas fa-plus-circle mr-1"></i> Sub-Part</button>
                    <button className="btn btn-success ml-2" onClick={addQuestion}><i className="fas fa-plus-circle mr-1"></i> Question</button>
                </div>
            </div>
        </>
    )
}

export default Sidepane