import './App.css';
import React from 'react'
import Home from "./components/Home"
import ExamMaker from "./components/ExamMaker/ExamMaker"
import TestConduct from "./components/TestConduct/TestConduct"
import PreExamForm from "./components/ExamMaker/PreExamForm"
import Register from './components/Register';
import Login from './components/Login';
import GlobalState from './context/GlobalState';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './components/Admin';


function App() {
  const isAuthenticated = useSelector(state => state.auth)
  
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/exam-maker"
             element={<ProtectedRoute
             redirectPath='/login'
             isAllowed={isAuthenticated}
             >
               <PreExamForm/>
             </ProtectedRoute>}/>
            <Route path="/exam-maker-success" element={<ExamMaker />} />
            <Route path="/test-conduct" element={<TestConduct />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
