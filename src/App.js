
// import './App.css';
import Navbar from './Components/Navbar';
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Volunteer from './Components/Volunteer';
import LandingPage from './Components/LandingPage';
// import {Learner, UploadResume, ShowResume } from "./Components/Learner";
import Privateroutes from './Privateroutes';
import Learner_validate from './Components/Learner_validate';
import Test from './Components/Test';
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>
        {/* <Test /> */}
        <Routes>
            
            <Route  exact element={ <Privateroutes /> } >
              <Route path='/' element={<LandingPage/>} />
            </Route>

            <Route  exact element={ <Privateroutes /> } >
              <Route path='/volunteer' element={<Volunteer/>} />
            </Route>

            <Route  exact element={ <Privateroutes /> } >
              <Route path='/learner_validate' element={<Learner_validate/>} />
            </Route>
          
            <Route path="*" element={ <p> 404 Page Not Found ! </p> }></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App;




