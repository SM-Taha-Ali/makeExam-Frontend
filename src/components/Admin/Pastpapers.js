import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"
import Select from 'react-select';
import classes from "./SideBar.module.css"

const Pastpapers = () => {

    const openNav = () => {
        var body = document.getElementsByTagName("BODY")[0];
        let width = body.offsetWidth
        if (width <= 640) {
            document.getElementById("mySidenav").style.width = "100vw";
            document.getElementById("main").style.marginLeft = "auto";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }

    const { questions, setQuestions, page, setPage, index } = useContext(globalContext)
    const [initialQuest, setInitialQuest] = useState({ section: "", year: "", board: "", subject: "", qno: "", marks: "", question: "", subQuestion: [] })
    const [initialMcq, setInitialMcq] = useState({ section: "", year: "", board: "", subject: "", mcqno: "", marks: "", question: "", options: [] })
    const [subQuest, setSubQuest] = useState([])
    const [options, setOptions] = useState([])
    const [subFurther, setSubFurther] = useState([])
    const [section, setSection] = useState({ name: "", type: "", marks: "", section: true })

    const secRef = useRef(null)

    const sections = [
        { value: 'Section-A', label: 'Section-A', name: "section" },
        { value: 'Section-B', label: 'Section-B', name: "section" },
        { value: 'Section-C', label: 'Section-C', name: "section" },
    ];

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

    const onChange = (e) => {
        try {
            setInitialQuest({ ...initialQuest, [e.target.name]: e.target.value })
        } catch (error) {
            setInitialQuest({ ...initialQuest, [e.name]: e.value })
        }
    }

    const onChangeMcq = (e) => {
        try {
            setInitialMcq({ ...initialMcq, [e.target.name]: e.target.value })
        } catch (error) {
            setInitialMcq({ ...initialMcq, [e.name]: e.value })
        }
    }
    const onChangeSub = (e) => {
        let subparts = [...subQuest];
        subparts[e.target.dataset.id][e.target.name] = e.target.value;
        setSubQuest(subparts)
    }
    const onChnageOpt = (e) => {
        let subparts = [...options];
        subparts[e.target.dataset.id][e.target.name] = e.target.value;
        setOptions(subparts)
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

    const addOption = () => {
        setOptions(options => [...options, { "mcqno": "", "question": "" }])
    }

    const deleteOption = (i) => {
        let deleteArray = [...options]
        deleteArray[i] = "x"
        setOptions(deleteArray)
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
        // let emptyQuestions = [...questions]
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
        console.log(initialQuest);
        // emptyQuestions.push(initialQuest)
        // setQuestions(emptyQuestions)
        // let dummyPage = page
        // dummyPage[index] = emptyQuestions
        // setPage(dummyPage)

    };

    const addMCQ = () => {
        // let emptyQuestions = [...questions]
        let subdeploy = initialMcq;
        subdeploy["subQuestion"] = options;
        setInitialQuest(subdeploy);
        console.log(initialMcq)
        // emptyQuestions.push(initialMcq)
        // setQuestions(emptyQuestions)
        // let dummyPage = page
        // dummyPage[index] = emptyQuestions
        // setPage(dummyPage)
    };

    const delQuestion = () => {
        let hahaQuestions = [...questions]
        hahaQuestions.pop()
        setQuestions(hahaQuestions)
    }

    const delMCQ = () => {
        let hahaQuestions = [...questions]
        hahaQuestions.pop()
        setQuestions(hahaQuestions)
    }

    const handlekeyDown = e => {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
        }
    }

    const [typePaper, settypePaper] = useState("subjective")

    return (
        <div>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
                <ul className='domain_nav ms-5'>
                </ul>
            </div>
            <div className="min-vh-100 ">
                <div className={`container`}>
                    <div className="d-flex flex-row justify-content-between pt-3
                    ">
                        <h1>Add Past Papers</h1>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked onClick={() => settypePaper("subjective")} />
                            <label className="btn btn-outline-success" htmlFor="btnradio2">Subjective</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => settypePaper("objective")} />
                            <label className="btn btn-outline-success" htmlFor="btnradio3">Objective</label>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-3">
                            <div>
                                <Select
                                    defaultValue={typePaper === "subjective" ? initialQuest.board : initialMcq.board}
                                    onChange={typePaper === "subjective" ? onChange : onChangeMcq}
                                    options={boards}
                                    width={100}
                                    placeholder="Select Board"
                                    name="board"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <Select
                                    value={typePaper === "subjective" ? initialQuest.subject : initialMcq.subject}
                                    onChange={typePaper === "subjective" ? onChange : onChangeMcq}
                                    options={subjects}
                                    width={100}
                                    placeholder="Select Subject"
                                    name="subject"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <Select
                                    value={typePaper === "subjective" ? initialQuest.section : initialMcq.section}
                                    onChange={typePaper === "subjective" ? onChange : onChangeMcq}
                                    options={sections}
                                    width={100}
                                    name="section"
                                    placeholder="Select Section"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <input type="text" className="form-control" value={typePaper === "subjective" ? initialQuest.year : initialMcq.year} name='year' placeholder='Enter Year' onChange={typePaper === "subjective" ? onChange : onChangeMcq} />
                            </div>
                        </div>
                    </div>
                    <div className='pb-3 text-end'>
                        <button className="btn btn-outline-success"><i class="far fa-eye me-2"></i> Preview</button>
                    </div>
                    {typePaper === "subjective" ? <div className="p-4 question_maker_border">
                        <div className="d-flex flex-row justify-content-between mb-3">
                            <div className='pr-4'>
                                <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                                <input type="text" className="form-control" id="" name='qno' value={initialQuest.qno} onChange={onChange} />
                            </div>
                            <div className='pl-4'>
                                <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                                <input type="text" className="form-control" id="" name='marks' value={initialQuest.marks} onChange={onChange} />
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
                                            <input type="text" className="form-control" data-id={i} id="exampleInputPassw" name='qno' onChange={onChangeSub} />
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
                                                                <input type="text" className="form-control" id="examleInputPassword1" data-id={j} data-parent={i} name='qno' onChange={onChangeFurth} />
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
                                <button className="btn btn-success" onClick={addSubPart}><i className="fas fa-plus-circle mr-1"></i> Sub-Part</button>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-8 mediaResponsive2 pt-3">
                                <div className='lolResponsive'>
                                    <button className="btn btn-danger queBtnResp" onClick={delQuestion}><i className="fas fa-trash mr-2"></i> Question</button>
                                    <button className="btn btn-success ml-2 queBtnResp2" onClick={addQuestion}><i className="fas fa-plus-circle mr-1"></i> Question</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="p-4 question_maker_border">
                            <div className="d-flex flex-row justify-content-between mb-3">
                                <div className='pr-4'>
                                    <label htmlFor="exampleInputPassword1" className="form-label">MCQ No.</label>
                                    <input type="text" className="form-control" id="" value={initialMcq.mcqno} name='mcqno' onChange={onChangeMcq} />
                                </div>
                                <div className='pl-4'>
                                    <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                                    <input type="text" className="form-control" id="" value={initialMcq.marks} name='marks' onChange={onChangeMcq} />
                                </div>
                            </div>
                            <label htmlFor="exampleInputEmail1" className="form-label">MCQ</label>
                            <textarea className="form-control" name='question' onKeyDown={handlekeyDown} id="question" value={initialMcq.question} onChange={onChangeMcq} placeholder="Enter your question here..." rows="6"></textarea>
                            {options.map((part, i) => {
                                return (part != "x") ?
                                    <div className='mt-5 mb-2 p-3 question_maker_border' key={i}>
                                        <div className='row pb-3'>
                                            <div className="col-md-4">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                                                <input type="text" className="form-control" data-id={i} id="exampleInputPassword1" name='mcqno' onChange={onChnageOpt} />
                                            </div>
                                        </div>
                                        <textarea className="form-control" name='question' data-id={i} placeholder={`Enter your question here...`} rows="4" onChange={onChnageOpt}></textarea>
                                        <div className='text-end pt-3'>
                                            <button className="btn btn-outline-danger mr-2" onClick={() => deleteOption(i)}><i className="fas fa-trash mr-2"></i>Option</button>
                                        </div>
                                    </div>
                                    : ""
                            })}
                            <div className='row g-0 pt-2'>
                                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-4 mediaResponsive1 pt-3">
                                    <button className="btn btn-success" onClick={addOption}><i className="fas fa-plus-circle mr-1"></i>Option</button>
                                </div>
                                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-8 mediaResponsive2 pt-3">
                                    <div className='lolResponsive'>
                                        <button className="btn btn-danger queBtnResp" onClick={delMCQ}><i className="fas fa-trash mr-2"></i> MCQ</button>
                                        <button className="btn btn-success ml-2 queBtnResp2" onClick={addMCQ}><i className="fas fa-plus-circle mr-1"></i> MCQ</button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Pastpapers