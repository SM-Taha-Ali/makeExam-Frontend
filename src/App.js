import './App.css';

import Home from "./components/Home"
import ExamMaker from "./components/ExamMaker/ExamMaker"
import TestConduct from "./components/TestConduct/TestConduct"
import PreExamForm from "./components/ExamMaker/PreExamForm"


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam-maker" element={<ExamMaker />} />
          <Route path="/test-conduct" element={<TestConduct />} />
          <Route path ="pre-exam-form" element = {<PreExamForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
