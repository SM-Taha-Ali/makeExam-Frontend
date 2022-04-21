import './App.css';
import React from 'react'
import Home from "./components/Home"
import ExamMaker from "./components/ExamMaker/ExamMaker"
import TestConduct from "./components/TestConduct/TestConduct"
import PreExamForm from "./components/ExamMaker/PreExamForm"
import Register from './components/Register';
import Pastpapers from './components/Admin/Pastpapers'
import Login from './components/Login';
import GlobalState from './context/GlobalState';
import PaperState from './context/PaperState';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './components/Admin/Admin';


function App() {
  const isAuthenticated = useSelector(state => state.auth)

  return (
    <>
      <GlobalState>
        <PaperState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} >
                <Route path="pastpapers" element={<Pastpapers />} />
              </Route>
              <Route path="/exam-maker"
                element={<ProtectedRoute
                  redirectPath='/login'
                  isAllowed={isAuthenticated}
                >
                  <PreExamForm />
                </ProtectedRoute>} />
              <Route path="/exam-maker-success" element={<ExamMaker />} />
              <Route path="/test-conduct" element={<TestConduct />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </PaperState>
      </GlobalState>
    </>
  );
}

export default App;
