import React, { Component } from 'react'
import CourseStructure from './CourseStructure'
import CourseInterest from './CourseInterest'
import CourseProficiency from './CourseProficiency'
import Success from './Success'


export default class Volunteer extends Component {

  state = {
    step: 1,
    courseStructure: [],
    courseInterest: '',
    skillRating: [{}],
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  }

  handleChange = (input,value) => {
    this.setState({[input]: value});
  }
  
  render() {
    const { step } = this.state;
    const {courseStructure, courseInterest, skillRating} = this.state;
    const values = {courseStructure, courseInterest, skillRating}

    switch (step) {
      case 1: 
        return (
          <CourseStructure 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2: 
        return (
          <CourseInterest
            prevStep={this.prevStep} 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3: 
        return (
          <CourseProficiency 
            prevStep={this.prevStep} 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      
      case 4: 
      return (
         <Success 
           prevStep={this.prevStep} 
           nextStep={this.nextStep}
          />
        )
      // never forget the default case
      default: 
         // do nothing
    }
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
