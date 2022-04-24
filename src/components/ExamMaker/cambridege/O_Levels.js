import React, { useContext, useState, useEffect } from 'react'
import globalContext from "../../../context/globalContext"
import './OLevel.css'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function O_Levels() {
  const { questions, setQuestions, page, setPage, index, setIndex, preExam } = useContext(globalContext)

  const generatePDF = () => {
    let imgs = [];
    console.log(page)
    page.map((data, index) => {
      document.getElementById(`pdf_${index}`).style.display = 'block'
      imgs.push(document.getElementById(`pdf_${index}`))
    })
    //const imgs = [...document.querySelectorAll('.pdf')]
    const doc = new jsPDF()
    imgs.forEach((a, i) => {
      html2canvas(a)
        .then(canvas => {
          const img = canvas.toDataURL('image/png')
          var pdfWidth = doc.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          doc.addImage(img, 'PNG', 5, 5, pdfWidth, pdfHeight);
          if (imgs.length > (i + 1)) {
            doc.addPage()
          }
        })
        .then(() => {
          if ((i + 1) === imgs.length) {
            doc.save('exam.pdf')
          }
        })
    })
    page.map((data, index) => {
      document.getElementById(`pdf_${index}`).style.display = 'none'
    })
  }


  const prevPage = () => {
    let copyArray = [...page]
    copyArray[index] = questions
    setPage(copyArray)
    let newIndex = index - 1
    setIndex(index - 1)
    let array = copyArray[newIndex]
    setQuestions(array)
  }

  const nextpage = () => {
    console.log(index)
    let copyArray = page
    copyArray[index] = questions
    setPage(copyArray)
    setIndex(index + 1)
    if (copyArray[index + 1] == null) {
      setQuestions([])
    } else {
      setQuestions(copyArray[index + 1])
    }
    console.log(credentials);
  }

  const addPage = () => {
    let copyArray = page
    copyArray[index] = questions
    setPage(copyArray)
    let newIndex = index + 1
    setIndex(newIndex)
    if (copyArray[newIndex] == null) {
      setQuestions([])
    } else {
      setQuestions(copyArray[index])
    }
  }


  let a = JSON.parse(localStorage.getItem('Credentials'))
  const [credentials, setCredentials] = useState({ paperName: a.paperName, paperType: a.paperType, instructions: a.instructions, instructions_2: a.instructions_2, code: a.code, date: a.date, time: a.time })








  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  function handleLocalStorage(names) {
    let obj = JSON.parse(localStorage.getItem('Credentials'))
    obj[names] = credentials[names]
    localStorage.setItem('Credentials', JSON.stringify(obj))
    let b = JSON.parse(localStorage.getItem("Credentials"))

    setCredentials(b)

  }

  const handleBlur = (name) => {
    handleLocalStorage(name)
  }

  
  const [mainQuest,setMainQuest]=useState({ qno: "", question: "", marks: ""})
  const[subQuest,setSubQuest]=useState({sqno: "", squest: ""})
  const[furQuest,setFurQuest]=useState({ssqno: "", ssquest: ""})
  const[id,setID]=useState("")
  const[name,setName]=useState("")
  const[blank,setBlank]= useState(false)

  // --------------------------------------
  const handleMainChange=(id,name,e)=>{
    if(e.target.value===""){
      setBlank(true)
    }else{
      setBlank(false)
    }
    if(name==='qno'){
      setName('qno')

    }
    else if(name==="question"){
      setName('question')



    }
    else{
      setName('marks')

    }
    setID(id)
    setMainQuest({...mainQuest,[e.target.name]:e.target.value})
  }
  const handleMainBlur=(id,name)=>{
    let duplicate = questions;
    if(name==='qno' && mainQuest.qno!==""){
      duplicate[id].qno = mainQuest.qno;
    }
    else if(name==="question" && mainQuest.question!==""){
      duplicate[id].question = mainQuest.question;

    }
    else if(name==="marks" && mainQuest.marks!==""){
      duplicate[id].marks = mainQuest.marks;

    }
    setMainQuest({ qno: "", question: "", marks: ""})
    setName("");
    setID("")
  }

  const handleSubChange=(id,sid,name,e)=>{
    if(e.target.value===""){
      setBlank(true)
    }else{
      setBlank(false)
    }
    if(name==='sqno'){
      setName('sqno')
    }
    else if(name==="squest"){
      setName('squest')


    }
    setID(id)
    setSubQuest({...subQuest,[e.target.name]:e.target.value})
  }

  const handleSubBlur=(id,sid,name)=>{
    let duplicate = questions;
    if(name==='sqno' && subQuest.sqno!==""){
      duplicate[id].subQuestion[sid].qno = subQuest.sqno;
    }
    else if(name==="squest" && subQuest.squest!==""){
      duplicate[id].subQuestion[sid].question = subQuest.squest;

    }
    setSubQuest({sqno: "", squest: ""})
    setName("");
    setID("")
  }

  const handleFurChange=(id,sid,fid,name,e)=>{
    if(e.target.value===""){
      setBlank(true)
    }else{
      setBlank(false)
    }
    if(name==='ssqno'){
      setName('ssqno')
    }
    else if(name==="ssquest"){
      setName('ssquest')


    }
    setID(id)
    setFurQuest({...furQuest,[e.target.name]:e.target.value})
  }
  
  const handleFurBlur=(id,sid,fid,name)=>{
    let duplicate = questions;
    if(name==='ssqno' && furQuest.ssqno!==""){
      duplicate[id].subQuestion[sid].subFurther[fid].qno = furQuest.ssqno;
    }
    else if(name==="ssquest" && furQuest.ssquest!==""){
      duplicate[id].subQuestion[sid].subFurther[fid].question = furQuest.ssquest;

    }
    setFurQuest({ssqno: "", ssquest: ""})
    setName("");
    setID("")
  }


  return (
    <div>
      <div className="preview mb-4 p-2">
        {page.map((data, ind) => {
          return (
            <div id={`pdf_${ind}`} className="pdf_hidden">
              {ind == 0 &&
                <>

                  <h3 className='text-center' >Cambridge O Level</h3>
                  <hr />
                  <div className='OLevels mx-2' >
                    <div  style={{ width: '100%' }}>
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none', paddingTop: '8px', verticalAlign: 'middle', height: '32px' }} className='fs-4' value={credentials.paperName} /><br />
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='py-2' value={credentials.paperType} /><br />
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='py-2' value={credentials.instructions} /><br />
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} value={credentials.instructions_2} /><br />
                    </div>
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none', marginTop: '10px', marginBottom: '-15px', padding: '0px' }} className='text-center' value={credentials.code} /><br />
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='text-center py-1' value={credentials.date} />
                      <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='text-center py-1' value={credentials.time} />
                    </div>
                  </div>
                  <hr />
                </>}
              {data.map((quest, idx) => {
                return <div className='row py-1' key={idx}>
                  <div className="text_black col-md-1 text-center" >{quest.qno}</div>
                  <div className="text_black col-md-9 text-wrap" >{quest.question}</div>
                  <div className="text_black col-md-2" >{quest.marks}</div>
                  {
                    quest.subQuestion.map((subP, sidx) => {
                      return <div className="row ms-1" key={sidx}>
                        <div className="text_black col-md-1 text-center">{subP.qno}</div>
                        <div className="text_black col-md-11 text-wrap">{subP.question}</div>
                        {
                          subP.subFurther.map((subfr, fidx) => {
                            return <div className="row ms-1" key={fidx}>
                              <div className="text_black col-md-1 text-center">{subfr.qno}</div>
                              <div className="text_black col-md-11 text-wrap">{subfr.question}</div>
                            </div>
                          })
                        }
                      </div>
                    })
                  }
                </div>
              })}
            </div>)
        })}
        <div id="pdf" className="pdf">
          {(index == 0) && <>
            <h3 className='text-center' >Cambridge O Level</h3>
            <hr />
            <div className='OLevels mx-2' >
              <div  style={{ width: '100%' }}>
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none', verticalAlign: 'middle', height: '32px' }} className=' fs-4' value={credentials.paperName} onBlur={() => handleBlur("paperName")} onChange={handleChange} name="paperName"  /><br />
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='py-2' onBlur={() => handleBlur("paperType")} onChange={handleChange} name="paperType" value={credentials.paperType} /><br />
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} className='py-2' onBlur={() => handleBlur("instructions")} onChange={handleChange} name="instructions" value={credentials.instructions} /><br />
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} onBlur={() => handleBlur("instructions_2")} onChange={handleChange} name="instructions_2" value={credentials.instructions_2}  /><br />
              </div>
              <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none', marginTop: '10px', marginBottom: '-15px', padding: '0px' }} onBlur={() => handleBlur("code")} onChange={handleChange} name="code" className='text-center' value={credentials.code} /><br />
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} onBlur={() => handleBlur("date")} onChange={handleChange} name="date" className='text-center py-1' value={credentials.date} />
                <input style={{ borderStyle: 'none', width: '100%', outline: 'none' }} onBlur={() => handleBlur("time")} onChange={handleChange} name="time" className='text-center py-1' value={credentials.time} />
              </div>
            </div>
            <hr />
          </>}
          {questions.map((quest, idx) => {
            return <div className='row py-1' key={idx}>

              <input style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleMainChange(idx,'qno',e)} onBlur={()=>handleMainBlur(idx,'qno')}  name='qno' value={(name==="qno"&& id===idx && !blank)?  mainQuest.qno : quest.qno } className="col-md-1 text-center" type="text" />
              <textarea style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleMainChange(idx,'question',e)} onBlur={()=>handleMainBlur(idx,'question')}  name='question' value={(name==="question"&& id===idx && !blank)?  mainQuest.question :quest.question} className="col-md-9 text-wrap" />
              <input style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleMainChange(idx,'marks',e)} onBlur={()=>handleMainBlur(idx,'marks')} name='marks' value={(name==="marks"&& id===idx && !blank)? mainQuest.marks :  quest.marks } className="col-md-2" />
              {
                quest.subQuestion.map((subP, sidx) => {
                  return <div className="row ms-1" key={sidx}>
                    <input style={{outline:'none',borderStyle:'none'}}  onChange={(e)=>handleSubChange(idx,sidx,'sqno',e)} onBlur={()=>handleSubBlur(idx,sidx,'sqno')}  name='sqno' className="col-md-1 text-center" value={(name==="sqno"&& id===idx && !blank)? subQuest.sqno :  subP.qno } type="text" />
                    <textarea style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleSubChange(idx,sidx,'squest',e)} onBlur={()=>handleSubBlur(idx,sidx,'squest')}   name='squest' className="col-md-11 text-wrap"  value={(name==="squest"&& id===idx && !blank)? subQuest.squest :  subP.question } type="text" />

                    {
                      subP.subFurther.map((subfr, fidx) => {
                        return <div className="row ms-1" key={fidx}>
                          <input style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleFurChange(idx,sidx,fidx,'ssqno',e)} onBlur={()=>handleFurBlur(idx,sidx,fidx,'ssqno')} name='ssqno' className="col-md-1 text-center" type="text"
                          value={(name==="ssqno"&& id===idx && !blank)? furQuest.ssqno :  subfr.qno } />
                          <textarea style={{outline:'none',borderStyle:'none'}} onChange={(e)=>handleFurChange(idx,sidx,fidx,'ssquest',e)} onBlur={()=>handleFurBlur(idx,sidx,fidx,'ssquest')} name='ssquest' className="col-md-11 text-wrap"
                          value={(name==="ssquest"&& id===idx && !blank)? furQuest.ssquest : subfr.question }  type="text" />
                        </div>
                      })
                    }
                  </div>
                })
              }
            </div>
          })}
        </div>
        <div className='pageNum'>
          {index + 1}
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between pb-3">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-success" onClick={prevPage} disabled={false} ><i className="fas fa-angle-left"></i></button>
          <button type="button" className="btn btn-outline-success" onClick={nextpage} disabled={false}><i className="fas fa-angle-right"></i></button>
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={addPage}><i className="fas fa-plus-circle mr-1"></i>  Add Page</button>
          <button className="btn btn-success" onClick={generatePDF}><i className="fas mr-2 fa-check"></i>Generate Paper</button>
        </div>
      </div>
    </div>
  )
}

export default O_Levels
