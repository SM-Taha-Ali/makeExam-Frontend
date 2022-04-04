import React, { useState } from 'react';
import GlobalContext from './globalContext';

const GlobalState = (props) => {

    const questionInitial = [ ]
    const [question, setQuestion] = useState(questionInitial)

    const [subpart, setsubpart] = useState([])
    const [nestedsubpart, setnestedsubpart] = useState([])

    const questionLagao = (item)=>{
        let dummyquestions = [...question]
        dummyquestions.push(item)
        setQuestion(dummyquestions)
    }

    const addPart = (item)=>{
        let dummysubpart = [...subpart]
        dummysubpart.push(item)
        setsubpart(dummysubpart)
    }

    const deletePart = ()=> {
        let delPart = [...subpart]
        delPart.pop()
        setsubpart(delPart)
    }

    const deleteNestPart = ()=> {
        let delPart = [...nestedsubpart]
        delPart.pop()
        setnestedsubpart(delPart)
    }

    const addNestPart = (item)=>{
        let dummynest = [...nestedsubpart]
        dummynest.push(item)
        setnestedsubpart(dummynest)
    }

    const clearPart = () => {
        setsubpart([])
    }

    return (
        <GlobalContext.Provider value={{ question, questionLagao, subpart, addPart, clearPart, nestedsubpart, addNestPart, deletePart, deleteNestPart }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState