import './App.css';

import Home from "./components/Home"
import ExamMaker from "./components/ExamMaker/ExamMaker"
import TestConduct from "./components/TestConduct/TestConduct"
import PreExamForm from "./components/ExamMaker/PreExamForm"

import GlobalState from './context/GlobalState';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
<<<<<<< HEAD
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exam-maker" element={<ExamMaker />} />
            <Route path="/test-conduct" element={<TestConduct />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>

=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam-maker" element={<ExamMaker />} />
          <Route path="/test-conduct" element={<TestConduct />} />
          <Route path ="pre-exam-form" element = {<PreExamForm/>}/>
        </Routes>
      </BrowserRouter>
>>>>>>> f5e57f0b070e59db13c85fd8a322054578c5fdb6
    </>
  );
}

export default App;
