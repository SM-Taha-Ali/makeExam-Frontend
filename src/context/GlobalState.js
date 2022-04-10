import React, { useState } from 'react';
import GlobalContext from './globalContext';

const GlobalState = (props) => {
    const [questions, setQuestions] = useState([])
    const [initialQuest, setInitialQuest] = useState({ qno: "", marks: "", question: "", subQuestion:[]})
    const [subQuest, setSubQuest] = useState({ subquest: "", qno: "", subFurther: []})
    const [subFurther, setSubFurther] = useState({ subquest: "", qno: "" })

    const pushQuestion = quest => {
        let dummyQuestions = [...questions];
        setInitialQuest(quest);
        dummyQuestions.push(initialQuest);
        setQuestions(dummyQuestions)
    }

    const pushSubQuestion = quest => {
        let dummySubQuest = [...subQuest];
        dummySubQuest.push(quest)
        setSubQuest(dummySubQuest)
        setInitialQuest({subQuestion:subQuest})
    }

    const pushSubFurther = quest => {
        let dummySubFurther = [...subFurther];
        dummySubFurther.push(quest)
        setSubFurther(dummySubFurther)
        setSubQuest({subFurther:subFurther})
    }

    return (
        <GlobalContext.Provider value={{ questions, initialQuest, subQuest, subFurther, setInitialQuest, setSubQuest, setSubFurther, setQuestions, pushQuestion, pushSubQuestion, pushSubFurther }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState