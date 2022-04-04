import React from 'react'

function pre_exam_form() {
  return (
    <>   
    <div className='container'> 
    <form>
      <div className="row  "> 
        <div className="col-md-4 my-3">
        <label htmlFor="exampleIntName">Institution Name</label>
          <input type="text" className="form-control" id="exampleIntName" aria-describedby="emailHelp" placeholder="Enter Institution Name" />
          
        </div>
        <div className="col-md-4 my-3">
          <label htmlFor="exampleExamName">Exam Name</label>
          <input type="text" className="form-control" id="exampleExamName" aria-describedby="emailHelp" placeholder="Enter Exam Name" />
          
        </div>
           
      <div className="col-md-4 my-3">

  
      <br/> <select className="boardchoice greyText" aria-label="Default select example" id="boardchoice">
        <option selected>Select Board</option>
        <option value={1}>Cambridge</option>
        <option value={2}>Karachi Board</option>
        <option value={3}>Federal</option>
      </select>
        </div>
    
    </div>


        <div className="row mx-1">

        <div className="md-col-4"><label htmlFor="exampleExamTime">Timings</label>
          <input type="text" className="form-control" id="exampleExamTime" aria-describedby="timingHelp" placeholder="Enter Timings" />
           </div>
        <div className="md-col-4 mx-4"><label htmlFor="exampleTotalMarks">Total Marks</label>
          <input type="text" className="form-control" id="exampleTotalMarks" aria-describedby="totalmarksHelp" placeholder="Enter Total Marks" />
          </div>
         
        

         <div className="col-md-4 ">
          <label htmlFor="examplePaperName">Paper Name</label>
          <input type="text" className="form-control" id="examplePaperName" aria-describedby="emailHelp" placeholder="Enter Paper Name" />
          
        </div>

        </div>

        
        <div className="row">  
      
       <div className="md-col-12 my-4 mx-4">
       <label className="form-label" htmlFor="exampleInstructions">Instructions</label>
        <textarea className="form-control" id="exampleInstructions" rows="5" cols ="70" defaultValue={""} />
        
        </div>

        </div>
  
        <button type="submit" className="pre_button btn btn-success my-3">Proceed</button>
      </form>
      </div>
    
    
    </>
  )
}

export default pre_exam_form
