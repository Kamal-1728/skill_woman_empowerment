import React, { Component  } from 'react'
import { useNavigate } from 'react-router-dom';


import { useState } from 'react';


const LandingPage = () => {
    let navigate = useNavigate();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [role,setRole] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const user = {
      email:"",
      firstname:"",
      lastname:"",
      password:"",
      role:""
    }

    const handleRedirecting = (e) => {
      e.preventDefault();
      user.email = email;
      user.firstname = firstName;
      user.lastname = lastName;
      user.password = password;
      user.role = role;
      console.log(user);

      if(user.role == 'Company'){
        // history.push("/volunteer");  
        navigate('company', { curruser: { firstname: user.firstname, lastname: user.lastname, email: user.email } });

      }
      else if(user.role == 'Volunteer'){
        navigate('volunteer' ,  { curruser: { firstname: user.firstname, lastname: user.lastname, email: user.email } })
      }
      else if(user.role == 'EndUser'){
        navigate('learner_validate' ,  { curruser: { firstname: user.firstname, lastname: user.lastname, email: user.email } })
      }
      else{
        navigate('*')
      }

    }
  

    return (
      <form className="container signup-page-main-container">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstName}
            onChange={ e => {
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={ e => {
            setLastName(e.target.value)
          }} />
        </div>

        <div className="mb-m" onChange={ e => {
          setRole(e.target.value)
        } }>
          <div>What is your role?</div>

          <label className="container_lable_landingpage"> Funder
            <input type="radio" value="Company" name="role" className="container_input_landingpage" /> 
          </label>

          <label className="container_lable_landingpage"> Volunteer
            <input type="radio" value="Volunteer" name="role" className="container_input_landingpage"/> 
          </label>

          <label className="container_lable_landingpage"> Women
            <input type="radio" value="EndUser" name="role" className="container_input_landingpage"/> 
          </label>


        </div>


        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value = {email}
            onChange={ e => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value = {password}
            onChange={ e => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleRedirecting}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }

export default LandingPage
