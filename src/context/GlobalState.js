import React, { useState, useRef } from 'react';
import GlobalContext from './globalContext';

const GlobalState = (props) => {
    const [questions, setQuestions] = useState([])
    const [initialQuest, setInitialQuest] = useState({ qno: "", marks: "", question: "", subQuestion: [] })
    const [subQuest, setSubQuest] = useState({ subquest: "", qno: "", subFurther: [] })
    const [subFurther, setSubFurther] = useState({ subquest: "", qno: "" })
    const [page, setPage] = useState([[]])
    const [index, setIndex] = useState(0)
    const [preExam, setpreExam] = useState([])
    const [sections, setSections] = useState([])
    const [details, setdetails] = useState([])

    const loginModal = useRef(null)
    const [loginStatus, setloginStatus] = useState(null)

    const getUserDetails = async (token) => {
        const response = await fetch(`http://localhost:8000/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
        });
        const json = await response.json();
        return json
    }

    return (
        <GlobalContext.Provider value={{ questions, initialQuest, subQuest, subFurther, page, index, loginModal, loginStatus, preExam, sections, details, setdetails, setSections, setpreExam, getUserDetails, setloginStatus, setIndex, setPage, setInitialQuest, setSubQuest, setSubFurther, setQuestions }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState