import React from "react";


const Coursefollow = ({prevStep, nextStep, handleChange, values}) => {
    

  const Continue = e =>{
    e.preventDefault();
    nextStep();
  }

  const Previous = e =>{
    e.preventDefault();
    prevStep();
  }

    return (
        <div>
            <h1>Course Follow</h1>
            <p>Choose a course to follow.</p>
            <button onClick={ Continue }>Next</button>
        </div>
    )
}

export default Coursefollow
