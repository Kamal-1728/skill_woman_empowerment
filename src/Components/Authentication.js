import React from "react";


const Authentication = ({nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div>
            <h1>Authentication</h1>
            <p>Enter your email and password to login</p>
            <br></br>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange('email')} value={values.email} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange('password')} value={values.password} />
            <button onClick={Continue}>Next</button>
        </div>
    )
}

export default Authentication
