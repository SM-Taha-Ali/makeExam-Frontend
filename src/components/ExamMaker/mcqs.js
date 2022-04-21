import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"

const Mcqs = () => {


    const { questions, initialQuest, setInitialQuest, setQuestions, page, setPage, index, sections, setSections } = useContext(globalContext)
    const [initialMcqs, setInitialMcqs] = useState({ mcqsNo: "", marks: "", mcqs: "", Options: [] })

    const [options, setOptions] = useState([])
    const [subFurther, setSubFurther] = useState([])
    const [section, setSection] = useState({ name: "", type: "", marks: "", section: true })

    const secRef = useRef(null)

    const onChange = (e) => {
        setInitialMcqs({ ...initialMcqs, [e.target.name]: e.target.value })
    }
    const onChangeSec = (e) => {
        setSection({ ...section, [e.target.name]: e.target.value })
    }
    const onChangeOpt = (e) => {
        let option = [...options];
        option[e.target.dataset.id][e.target.name] = e.target.value;
        setOptions(option)
        
    }
    

    const addSubPart = () => {
        setOptions(options => [...options, { "qno": "", "question": "" }])
    }

    const deletePart = (i) => {
        let deleteArray = [...options]
        deleteArray[i] = "x"
        setOptions(deleteArray)
    }

    

    const addQuestion = () => {
        let emptyQuestions = [...questions]
        let modifiedArray = options
        
       

        console.log(initialMcqs)
        setOptions(modifiedArray)
        let subdeploy = initialQuest;
        subdeploy["optionsion"] = options;
        setInitialQuest(subdeploy);
        emptyQuestions.push(initialQuest)
        setQuestions(emptyQuestions)
        let dummyPage = page
        dummyPage[index] = emptyQuestions
        setPage(dummyPage)
    };

    const delQuestion = () => {
        let hahaQuestions = [...questions]
        hahaQuestions.pop()
        setQuestions(hahaQuestions)
    }

    const handlekeyDown = e => {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
        }
    }

    const addSection = (e) => {
        secRef.current.click()
    }

    const finalSection = () => {
        let initialSections = sections
        initialSections.push(section)
        setSections(initialSections)
        console.log(sections)
    }


    return (
    <div>
        <div>
            

            <div className="p-4 question_maker_border">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className='pr-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">MCQs No.</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='mcqsNo' onChange={onChange} />
                    </div>
                    <div className='pl-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='marks' onChange={onChange} />
                    </div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">MCQs</label>
                <textarea className="form-control" name='mcqs' onKeyDown={handlekeyDown} id="mcqs" value={initialMcqs.mcqs} onChange={onChange} placeholder="Enter your MCQs here..." rows="6"></textarea>
                {options.map((part, i) => {
                    return (part != "x") ?
                        <div className='mt-5 mb-2 p-3 question_maker_border' key={i}>
                            <div className='row pb-3'>
                                <div className="col-md-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Option No.</label>
                                    <input type="text" className="form-control" data-id={i} id="exampleInputPassword1" name='qno' onChange={onChangeOpt} />
                                </div>
                            </div>
                            <textarea className="form-control" name='question' data-id={i} placeholder={`Enter your Option here...`} rows="4" onChange={onChangeOpt}></textarea>
                            <div className='text-end pt-3'>
                                <button className="btn btn-outline-danger mr-2" onClick={() => deletePart(i)}><i className="fas fa-trash mr-2"></i>Delete </button>
                            </div>
                        </div>
                        : ""
                })}
                <div className='row g-0 pt-2'>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-4 mediaResponsive1 pt-3">
                        <button className="btn btn-success me-2" onClick={addSection}><i className="fas fa-plus-circle mr-1"></i> Section</button>
                        <button className="btn btn-success"  onClick={addSubPart}><i className="fas fa-plus-circle mr-1"></i> Add Option</button>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-8 mediaResponsive2 pt-3">
                        <div className='lolResponsive'>
                            <button className="btn btn-danger queBtnResp" onClick={delQuestion}><i className="fas fa-trash mr-2"></i> MCQs</button>
                            <button className="btn btn-success ml-2 queBtnResp2" onClick={addQuestion}><i className="fas fa-plus-circle mr-1"></i> MCQs</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Mcqs;
