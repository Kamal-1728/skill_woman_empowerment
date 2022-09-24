import React from "react";

const Coursemanual = ({ nextStep, handleChange, values}) => {
        
    const Continue = e =>{
      e.preventDefault();
      nextStep();
    }

  
    return (
      <div>
        <h1>Course Structures</h1>
        <p>We have following courses availabe.</p>
        <p>Please go through the course structures of avilable courses to teach and choose a course of your expertise.</p>
        <button onClick={ Continue }>Next</button>
      </div>
    )
  }
  
  export default Coursemanual
  