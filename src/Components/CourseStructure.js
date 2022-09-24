import React from 'react'

const CourseStructure = ({prevStep, nextStep, handleChange, values}) => {

  const Continue = e =>{
    e.preventDefault();
    nextStep();
  }

  return (
    <div className="course-form d-flex justify-content-center flex-column container">
      {/* <div className="d-flex justify-content-center"> */}
      <h1>Course Structures</h1>
      <p>We have following courses availabe.</p>
      <p>Please go through the course structures of avilable courses to teach and choose a course of your expertise.</p>
      <div className="d-flex justify-content-around">
      <button onClick={ Continue } type="button" class="btn btn-outline-info">Next</button>
      </div>
    </div>
  )
}

export default CourseStructure