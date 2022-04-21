import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"
import paperContext from "../../context/paperContext"
import Select from 'react-select';
import classes from "./SideBar.module.css"

const Pastpapers = () => {
    const { paper, createPaperKB, getPapersKB, createPaperCB, getPapersCB } = useContext(paperContext)

    useEffect(() => {
        getPapersKB()
    }, [])


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
    const [initialQuest, setInitialQuest] = useState({ section: "", year: "", board: "", subject: "", qno: "", marks: "", question: "", subParts: [], paperType: "" })
    const [initialMcq, setInitialMcq] = useState({ section: "", year: "", board: "", subject: "", qno: "", marks: "", question: "", subParts: [], paperType: "" })
    const [subQuest, setSubQuest] = useState([])
    const [subParts, setsubParts] = useState([])
    const [subFurther, setSubFurther] = useState([])

    const pastPaperRef = useRef(null)

    const sections = [
        { value: 'Section-A', label: 'Section-A', name: "section" },
        { value: 'Section-B', label: 'Section-B', name: "section" },
        { value: 'Section-C', label: 'Section-C', name: "section" },
    ]

    const boards = [
        { value: 'cambridge', label: 'Cambridge', name: "board" },
        { value: 'karachi', label: 'Karachi', name: "board" },
        { value: 'federal', label: 'Federal', name: "board" },
    ]

    const subjects = [
        { value: 'isl', label: 'Islamiat', name: "subject" },
        { value: 'english', label: 'English', name: "subject" },
        { value: 'math', label: 'Math', name: "subject" },
        { value: 'pst', label: 'PST', name: "subject" },
        { value: 'urdu', label: 'Urdu', name: "subject" },
        { value: 'chem', label: 'Chemistry', name: "subject" },
        { value: 'phy', label: 'Physics', name: "subject" },
    ]

    const years = [
        { value: '2015', label: '2015', name: "year" },
        { value: '2016', label: '2016', name: "year" },
        { value: '2017', label: '2017', name: "year" },
        { value: '2018', label: '2018', name: "year" },
        { value: '2019', label: '2019', name: "year" },
        { value: '2020', label: '2020', name: "year" },
        { value: '2021', label: '2021', name: "year" },
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
        let subparts = [...subParts];
        subparts[e.target.dataset.id][e.target.name] = e.target.value;
        setsubParts(subparts)
    }

    const onChangeFurth = (e) => {
        let subFur = [...subFurther]
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
        setsubParts(subParts => [...subParts, { "qno": "", "question": "" }])
    }

    const deleteOption = (i) => {
        let deleteArray = [...subParts]
        deleteArray[i] = "x"
        setsubParts(deleteArray)
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

    const [subBoard, setSubBoard] = useState(null)
    const [objBoard, setObjBoard] = useState(null)

    const [subSection, setSubSection] = useState(null)
    const [objSection, setObjSection] = useState(null)

    const [subSubject, setSubSubject] = useState(null)
    const [objSubject, setObjSubject] = useState(null)

    const addQuestion = () => {
        let modifiedArray = subQuest
        let lolArray = subFurther
        for (let index = 0; index < subQuest.length; index++) {
            for (let j = 0; j < subFurther.length; j++) {
                if ((subFurther[j]["parent"] == index) && (lolArray[j] !== undefined)) {
                    modifiedArray[index].subFurther = lolArray[j]["finalFurther"]
                }
            }
        }
        setSubQuest(modifiedArray)
        let subdeploy = initialQuest;
        subdeploy["subParts"] = subQuest;
        subdeploy["paperType"] = paperType;
        subdeploy["board"] = subBoard.value;
        subdeploy["section"] = subSection.value;
        subdeploy["subject"] = subSubject.value;
        setInitialQuest(subdeploy);
        createPaperKB(initialQuest.year, initialQuest.section, initialQuest.marks, initialQuest.question, initialQuest.subParts, initialQuest.paperType, initialQuest.subject, initialQuest.qno, initialQuest.board)
        setInitialQuest({ ...initialQuest, qno: "", marks: "", question: "", subParts: [], paperType: "" })
        setSubQuest([])
        setSubFurther([])
    }

    const addMCQ = () => {
        let subdeploy = initialMcq;
        subdeploy["subParts"] = subParts;
        subdeploy["paperType"] = paperType;
        subdeploy["board"] = objBoard.value;
        subdeploy["section"] = objSection.value;
        subdeploy["subject"] = objSubject.value;
        setInitialQuest(subdeploy);
        createPaperKB(initialMcq.year, initialMcq.section, initialMcq.marks, initialMcq.question, initialMcq.subParts, initialMcq.paperType, initialMcq.subject, initialMcq.qno, initialMcq.board)
        setInitialMcq({ ...initialMcq, qno: "", marks: "", question: "", subParts: [], paperType: "" })
        setsubParts([])
    }

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

    const [paperType, setpaperType] = useState("subjective")

    const preview = () => {
        getPapersKB()
        pastPaperRef.current.click()
    }

    return (
        <div>
            <div className="d-flex flex-row align-items-center">
                <span onClick={openNav} role="button" className='text-start my-2 d-inline ms-3 text-dark'><i className="fas fa-bars text-dark me-2"></i></span>
                <ul className='domain_nav ms-5'>
                </ul>
            </div>
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
                                    <div className="col-md-2">
                                        <div>
                                            <Select
                                                defaultValue={null}
                                                onChange={onChange}
                                                options={sections}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#04aa6d34',
                                                        primary50: '#04aa6d7a',
                                                        primary: '#04AA6D',
                                                    },
                                                })}
                                                width={100}
                                                name="section"
                                                placeholder="Section"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <Select
                                                defaultValue={null}
                                                onChange={onChange}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#04aa6d34',
                                                        primary50: '#04aa6d7a',
                                                        primary: '#04AA6D',
                                                    },
                                                })}
                                                options={years}
                                                width={100}
                                                name="year"
                                                placeholder="Year"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <Select
                                                defaultValue={null}
                                                onChange={onChange}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#04aa6d34',
                                                        primary50: '#04aa6d7a',
                                                        primary: '#04AA6D',
                                                    },
                                                })}
                                                options={boards}
                                                width={100}
                                                name="year"
                                                placeholder="Board"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <Select
                                                defaultValue={null}
                                                onChange={onChange}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#04aa6d34',
                                                        primary50: '#04aa6d7a',
                                                        primary: '#04AA6D',
                                                    },
                                                })}
                                                options={subjects}
                                                width={100}
                                                name="year"
                                                placeholder="Subject"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Question</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            paper !== null ? paper.map((question, i) => {
                                                return <tr>
                                                    <td>{i + 1}</td>
                                                    <td>
                                                        <p className='text-wrap'>
                                                            {question.question}
                                                        </p>
                                                        {question.subParts.map((subPart, j) => {
                                                            return <p className='text-wrap ms-1'>
                                                                {subPart.qno} {subPart.question}
                                                                {subPart.subFurther.map((subFur, k) => {
                                                                    <p className='text-wrap ms-2'>
                                                                        {subFur.qno} {subFur.question}
                                                                    </p>
                                                                })}
                                                            </p>
                                                        })}
                                                    </td>
                                                </tr>
                                            })
                                                : ""
                                        }
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

            {/* Past Papers Modal */}
            <div className="min-vh-100 ">
                <div className={`container`}>
                    <div className="d-flex flex-row justify-content-between pt-3 pb-4">
                        <h1 className='color_apna'>ADD PAST PAPERS</h1>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" defaultChecked onClick={() => setpaperType("subjective")} />
                            <label className="btn btn-outline-success" htmlFor="btnradio2">Subjective</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => setpaperType("objective")} />
                            <label className="btn btn-outline-success" htmlFor="btnradio3">Objective</label>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-md-3">
                            <div>
                                <Select
                                    value={paperType === "subjective" ? subBoard : objBoard}
                                    onChange={paperType === "subjective" ? setSubBoard : setObjBoard}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#04aa6d34',
                                            primary50: '#04aa6d7a',
                                            primary: '#04AA6D',
                                        },
                                    })}
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
                                    value={paperType === "subjective" ? subSubject : objSubject}
                                    onChange={paperType === "subjective" ? setSubSubject : setObjSubject}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#04aa6d34',
                                            primary50: '#04aa6d7a',
                                            primary: '#04AA6D',
                                        },
                                    })}
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
                                    value={paperType === "subjective" ? subSection : objSection}
                                    onChange={paperType === "subjective" ? setSubSection : setObjSection}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#04aa6d34',
                                            primary50: '#04aa6d7a',
                                            primary: '#04AA6D',
                                        },
                                    })}
                                    options={sections}
                                    width={100}
                                    name="section"
                                    placeholder="Select Section"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <input type="text" className="form-control" value={paperType === "subjective" ? initialQuest.year : initialMcq.year} name='year' placeholder='Enter Year' onChange={paperType === "subjective" ? onChange : onChangeMcq} />
                            </div>
                        </div>
                    </div>
                    <div className='pb-3 text-end'>
                        <button className="btn btn-outline-success" onClick={preview}><i class="far fa-eye me-2"></i> Preview</button>
                    </div>
                    {paperType === "subjective" ? <div className="p-4 question_maker_border">
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
                                    </div>
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
                                    <input type="text" className="form-control" id="" value={initialMcq.qno} name='qno' onChange={onChangeMcq} />
                                </div>
                                <div className='pl-4'>
                                    <label htmlFor="exampleInputPassword1" className="form-label">Marks</label>
                                    <input type="text" className="form-control" id="" value={initialMcq.marks} name='marks' onChange={onChangeMcq} />
                                </div>
                            </div>
                            <label htmlFor="exampleInputEmail1" className="form-label">MCQ</label>
                            <textarea className="form-control" name='question' onKeyDown={handlekeyDown} id="question" value={initialMcq.question} onChange={onChangeMcq} placeholder="Enter your question here..." rows="6"></textarea>
                            {subParts.map((part, i) => {
                                return (part != "x") ?
                                    <div className='mt-5 mb-2 p-3 question_maker_border' key={i}>
                                        <div className='row pb-3'>
                                            <div className="col-md-4">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Question No.</label>
                                                <input type="text" className="form-control" data-id={i} id="exampleInputPassword1" name='qno' onChange={onChnageOpt} />
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
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Pastpapers