import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"
import Mcqs from './mcqs'

const Sidepane = (props) => {
    const { questions, initialQuest, setInitialQuest, setQuestions, page, setPage, index, sections, setSections } = useContext(globalContext)

    const [subQuest, setSubQuest] = useState([])
    const [subFurther, setSubFurther] = useState([])
    const [section, setSection] = useState({ name: "", type: "", marks: "", section: true })

    const secRef = useRef(null)

    const onChange = (e) => {
        setInitialQuest({ ...initialQuest, [e.target.name]: e.target.value })
    }
    const onChangeSec = (e) => {
        setSection({ ...section, [e.target.name]: e.target.value })
    }
    const onChangeSub = (e) => {
        let subparts = [...subQuest];
        subparts[e.target.dataset.id][e.target.name] = e.target.value;
        setSubQuest(subparts)
    }
    const onChangeFurth = (e) => {
        let subFur = [...subFurther]
        console.log("SUBFURTHER", subFur, "SUBQUEST", subQuest)
        for (let j = 0; j < subFurther.length; j++) {
            if (subFurther[j]["parent"] == e.target.dataset.parent) {
                subFur[j].finalFurther[e.target.dataset.id][e.target.name] = e.target.value
            }
        }
        setSubFurther(subFur)
    }
    const addFurther = (i) => {
        let checkArray = [...subFurther]
        let parentPresent = false
        for (let j = 0; j < checkArray.length; j++) {
            if (checkArray[j]["parent"] == i) {
                checkArray[j]["finalFurther"].push({ "parent": i, "qno": "", "question": "" })
                parentPresent = true
                break
            } else {
                parentPresent = false
            }
        };
        let modifiedArray = [...subQuest]
        if (checkArray.length == 0 || !parentPresent) {
            setSubFurther(subFurther => [...subFurther, { "parent": i, "finalFurther": [{ "parent": 0, "qno": "", "question": "" }] }])
        }
        setSubQuest(modifiedArray)
        console.log(subFurther)

    }

    const addSubPart = () => {
        setSubQuest(subQuest => [...subQuest, { "qno": "", "question": "", "subFurther": [] }])
    }

    const deletePart = (i) => {
        let deleteArray = [...subQuest]
        deleteArray[i] = "x"
        setSubQuest(deleteArray)
    }

    const deleteFurther = (e) => {
        let deleteArray = [...subFurther]
        for (let j = 0; j < subFurther.length; j++) {
            if (subFurther[j]["parent"] == e.target.dataset.parent) {
                deleteArray[j].finalFurther[e.target.dataset.id] = "x"
            }
        }
        setSubFurther(deleteArray)
    }

    const addQuestion = () => {
        let emptyQuestions = [...questions]
        let modifiedArray = subQuest
        let lolArray = subFurther
        for (let index = 0; index < subQuest.length; index++) {
            for (let j = 0; j < subFurther.length; j++) {
                console.log(index, subFurther[j]["parent"])
                if ((subFurther[j]["parent"] == index) && (lolArray[j] !== undefined)) {
                    modifiedArray[index].subFurther = lolArray[j]["finalFurther"]
                }
            }
        }
        setSubQuest(modifiedArray)
        let subdeploy = initialQuest;
        subdeploy["subQuestion"] = subQuest;
        setInitialQuest(subdeploy);
        emptyQuestions.push(initialQuest)
        setQuestions(emptyQuestions)
        let dummyPage = page
        dummyPage[index] = emptyQuestions
        setPage(dummyPage)

        console.log(questions)
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

    const [typePaper, settypePaper] = useState("subjective")

    return (
        <>
            {/* Section Modal */}
            <button ref={secRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#sectionModal">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="sectionModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Section</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="fee_name" placeholder='Section A' name='name' required onChange={onChangeSec} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="fee_amount" placeholder='Short Question' name='type' required onChange={onChangeSec} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Marks</label>
                                    <input type="text" className="form-control" id="fee_amount" placeholder='Total marks' name='marks' required onChange={onChangeSec} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Back</button>
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={finalSection}><i className="fas fa-plus-circle mr-1"></i> Section</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section Modal */}


            <div className="py-4">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked onClick={() => settypePaper("subjective")} />
                    <label className="btn btn-outline-success" htmlFor="btnradio2">Subjective</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => settypePaper("objective")} />
                    <label className="btn btn-outline-success" htmlFor="btnradio3">Objective</label>
                </div>
            </div>
            {
                typePaper === "subjective" ? <div className="p-4 question_maker_border">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className='pr-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='qno' onChange={onChange} />
                    </div>
                    <div className='pl-4'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='marks' onChange={onChange} />
                    </div>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">Question</label>
                <textarea className="form-control" name='question' onKeyDown={handlekeyDown} id="question" value={initialQuest.question} onChange={onChange} placeholder="Enter your question here..." rows="6"></textarea>
                {subQuest.map((part, i) => {
                    return (part != "x") ?
                        <div className='mt-5 mb-2 p-3 question_maker_border' key={i}>
                            <div className='row pb-3'>
                                <div className="col-md-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                                    <input type="text" className="form-control" data-id={i} id="exampleInputPassword1" name='qno' onChange={onChangeSub} />
                                </div>
                            </div>
                            <textarea className="form-control" name='question' data-id={i} placeholder={`Enter your question here...`} rows="4" onChange={onChangeSub}></textarea>
                            <div className='text-end pt-3'>
                                <button className="btn btn-outline-danger mr-2" onClick={() => deletePart(i)}><i className="fas fa-trash mr-2"></i>Sub-Part</button>
                                <button className="btn btn-outline-success mr-2" onClick={() => addFurther(i)}><i className="fas fa-plus-circle mr-2"></i>Sub-Part</button>
                            </div>
                            {
                                subFurther.map(element => {
                                    return element["parent"] == i ?
                                        element.finalFurther.map((finalElem, j) => {
                                            return (finalElem != "x") ? <div className='mt-5 mb-2 p-3 question_maker_border' key={j}>
                                                <div className='row pb-3'>
                                                    <div className="col-md-4">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" data-id={j} data-parent={i} name='qno' onChange={onChangeFurth} />
                                                    </div>
                                                </div>
                                                <textarea className="form-control" name='question' data-id={j} data-parent={i} placeholder={`Enter your question here...`} rows="4" onChange={onChangeFurth}></textarea>
                                                <div className={`text-end pt-3`}>
                                                    <button className="btn btn-outline-danger mr-2" value="value" data-id={j} data-parent={element["parent"]} onClick={deleteFurther}><i className="fas fa-trash mr-2"></i>Sub-Part</button>
                                                </div>
                                            </div> : ""
                                        }) : ""
                                })
                            }
                        </div>
                        : ""
                })}
                <div className='row g-0 pt-2'>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-4 mediaResponsive1 pt-3">
                        <button className="btn btn-success me-2" onClick={addSection}><i className="fas fa-plus-circle mr-1"></i> Section</button>
                        <button className="btn btn-success" onClick={addSubPart}><i className="fas fa-plus-circle mr-1"></i> Sub-Part</button>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-8 mediaResponsive2 pt-3">
                        <div className='lolResponsive'>
                            <button className="btn btn-danger queBtnResp" onClick={delQuestion}><i className="fas fa-trash mr-2"></i> Question</button>
                            <button className="btn btn-success ml-2 queBtnResp2" onClick={addQuestion}><i className="fas fa-plus-circle mr-1"></i> Question</button>
                        </div>
                    </div>
                </div>
            </div> : <Mcqs/>
            }
            
        </>
    )
}

export default Sidepane

