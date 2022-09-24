import React, { Component } from 'react'
import Coursemanual from './Coursemanual'
import Coursefollow from './Coursefollow'
import No_student from './No_student'
 

export default class Learner_validate extends Component {
   
    state = {
        step: 1,
        Coursemanual: [],
        Coursefollow:[],
        No_student: [],
    }


    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const {Coursemanual, Coursefollow, No_student } = this.state;     
        const values = {Coursemanual, Coursefollow, No_student }

       
        switch (step) {
            case 1:
                return (
                    <Coursemanual
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                    // debug
                    // console.log("test")
                
                )
            case 2:
                return (
                    <Coursefollow
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <No_student
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:

        }
        

    }
}


// authentication


