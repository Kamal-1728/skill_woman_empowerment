import React from "react";

const No_student = ({prevStep, handleChange, values}) => {
            
    const Previous = e =>{
        e.preventDefault();
        prevStep();
      }
      const handleSubmit= e =>{
        e.preventDefault();
      }
    return (
        <div>
            <h1>Number of Student</h1>
            <p>How many students you want to teach?</p>
            <button onClick={ handleSubmit }>Next</button>
        </div>
    )
}

export default No_student