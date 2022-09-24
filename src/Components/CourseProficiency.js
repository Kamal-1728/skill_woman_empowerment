import React from 'react'

const CourseProficiency = ({prevStep, nextStep, handleChange, values}) => {
  
  const {courseStructure, courseInterest, skillRating} = values
  const Previous = e =>{
    e.preventDefault();
    prevStep();
  }
  const handleSubmit= e =>{
    e.preventDefault();
    nextStep();
    console.log(courseInterest);
  }
  return (
    <div className="course-form d-flex justify-content-center flex-column container">CourseProficiency
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-around">
      <button onClick={ Previous } type="button" class="btn btn-outline-info">Previous</button>
      <button type="submit" onClick={handleSubmit} class="btn btn-outline-success">Submit</button>
      </div>
    </div>
  )
}

export default CourseProficiency