import React, { useEffect, useState, useRef, useContext } from 'react'
import globalContext from "../../context/globalContext"

const Sidepane = (props) => {
    const { questions, initialQuest, setInitialQuest, setQuestions, pushQuestion, pushSubQuestion, pushSubFurther } = useContext(globalContext)

    const [subQuest, setSubQuest] = useState([])
    const [subFurther, setSubFurther] = useState([])

    const onChange = (e) => {
        setInitialQuest({ ...initialQuest, [e.target.name]: e.target.value })
    }
    const onChangeSub = (e) => {
        let subparts = [...subQuest];
        subparts[e.target.dataset.id]["qno"] = e.target.dataset.id
        subparts[e.target.dataset.id][e.target.name] = e.target.value;
        setSubQuest(subparts)
    }
    const onChangeFurth = (e) => {
        let subFur = [...subFurther]
        console.log("SUBFURTHER", subFur, "SUBQUEST", subQuest)
        for (let j = 0; j < subFurther.length; j++) {
            if (subFurther[j]["parent"] == e.target.dataset.parent) {
                subFur[j].finalFurther[e.target.dataset.id]["qno"] = e.target.dataset.id
                subFur[j].finalFurther[e.target.dataset.id]["question"] = e.target.value
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
        console.log(lolArray, modifiedArray)
        setSubQuest(modifiedArray)
        let subdeploy = initialQuest;
        subdeploy["subQuestion"] = subQuest;
        setInitialQuest(subdeploy);
        emptyQuestions.push(initialQuest)
        setQuestions(emptyQuestions)
        console.log(questions)
    };

    const handlekeyDown = e => {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
        }
    }

    var check = false

    return (
        <>
            <div className="p-4 question_maker_border">
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
                        <div className='my-5 p-3 question_maker_border' key={i}>
                            <textarea className="form-control" name='question' data-id={i} placeholder={`Enter your question here...`} rows="4" onChange={onChangeSub}></textarea>
                            <div className='text-end pt-3'>
                                <button className="btn btn-outline-danger mr-2" onClick={() => deletePart(i)}><i className="fas fa-trash mr-2"></i>Sub-Part</button>
                                <button className="btn btn-outline-success mr-2" onClick={() => addFurther(i)}><i className="fas fa-plus-circle mr-2"></i>Sub-Part</button>
                            </div>
                            {
                                subFurther.map(element => {
                                    return element["parent"] == i ?
                                        element.finalFurther.map((finalElem, j) => {
                                            return (finalElem != "x") ? <div className='my-5 p-3 question_maker_border' key={j}>
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
                <div className='d-flex flex-row justify-content-end pt-3'>
                    <button className="btn btn-success mr-2" onClick={addSubPart}><i className="fas fa-plus-circle mr-1"></i> Sub-Part</button>
                    <button className="btn btn-success ml-2" onClick={addQuestion}><i className="fas fa-plus-circle mr-1"></i> Question</button>
                </div>
            </div>
        </>
    )
}

export default Sidepane