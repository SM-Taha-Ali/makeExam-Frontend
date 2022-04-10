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
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exam-maker" element={<PreExamForm />} />
              <Route path="/exam-maker-success" element={<ExamMaker />} />
            <Route path="/test-conduct" element={<TestConduct />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>

    </>
  );
}

export default App;
