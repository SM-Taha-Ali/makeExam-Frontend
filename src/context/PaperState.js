import React, { useState } from 'react';
import PaperConext from './paperContext';

const GlobalState = (props) => {

    const host = "http://localhost:8000"

    const paperInitial = []
    const [paper, setPaper] = useState(paperInitial)


    const createPaperKB = async (year, section, marks, question, subParts, paperType, subject, qno, board) => {
        const response = await fetch(`${host}/api/pastPaperkb/create-paper`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year, section, marks, question, subParts, paperType, subject, qno, board })
        });
        const json = await response.json();
    }

    const getPapersKB = async () => {
        const response = await fetch(`${host}/api/pastPaperkb/get-paper`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setPaper(json);
    }

    const createPaperCB = async (year, section, marks, question, subParts, paperType, subject, qno, board) => {
        const response = await fetch(`/api/pastPapercb/create-paper`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year, section, marks, question, subParts, paperType, subject, qno, board })
        });
        const json = await response.json();
    }

    const getPapersCB = async () => {
        const response = await fetch(`/api/pastPapercb/get-paper`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setPaper(json);
    }


    return (
        <PaperConext.Provider value={{ paper, createPaperKB, getPapersKB, createPaperCB, getPapersCB }}>
            {props.children}
        </PaperConext.Provider>
    )
}

export default GlobalState