import React from 'react'

const CourseInterest = ({prevStep, nextStep, handleChange, values}) => {
  
  const Continue = e =>{
    e.preventDefault();
    nextStep();
  }

  const Previous = e =>{
    e.preventDefault();
    prevStep();
  }

  return (
    <div className="course-form d-flex justify-content-center flex-column container"><h1>Course Interest</h1>
    <p>As you have seen the course structures of your interest, kindly select the course you are interested in.</p>
    <br></br>
      <label htmlFor="choose_course">Course Choice </label>
                    <select class="form-select" aria-label="Default select example" onChange={e => handleChange('courseInterest',e.target.value)}>
                        <option value='C1'>Course 1</option>
                        <option value='C2'>Course 2</option>
                        <option value='C3'>Course 3</option>
                        <option value='C4'>Course 4</option>
                    </select>
                    <br></br>
                    <div className="d-flex justify-content-around">
                      <button onClick={ Previous } type="button" class="btn btn-outline-info">Previous</button>
                      <button onClick={ Continue } type="button" class="btn btn-outline-info">Next</button>
                    </div>
    </div>
  )
}

export default CourseInterest