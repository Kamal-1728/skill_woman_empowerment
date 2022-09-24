import React from 'react'
import { useState } from 'react';

import './learner.css'


// function to create login passward window 
function Learner() {
    const [email,setEmail]=useState("");
    const [passw, setPassw]=useState("");
    const [resume, setResume]=useState("");
    const [dataInput, setDataInput]=useState('');

    const submitThis=(e)=>{
        e.preventDefault();
        const info={email:email,passw:passw,resume:resume};
        setDataInput([info]);
        console.log(email);
    }

    return (
        //apply div some name
       
        <div>
            <form action="" onSubmit={submitThis}>
                <div className='login'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="passw">Password</label>
                    <input type='text' name='passw' id='passw' value={passw} onChange={(e)=>setPassw(e.target.value)}/>
                    <button type='submit'>Login</button>

                </div>

                {/* =============================================== */}

              
                {/* =============================================== */}
            {/* show user document for selected course */}
                    {/* like if he select course show them documtn course1.pdf */}

                    <div className='show_doc'>
                    <br></br><br></br><br></br>
                    <label htmlFor="show_doc">Show document</label>
                    <select className="select_course" id="exampleFormControlSelect1">
                        <option>course 1</option>
                        <option>course 2</option>
                        <option>course 3</option>
                        <option>course 4</option>

                    
                    </select>
                    <button type='submit'>Show</button>
                </div>

                {/* =============================================== */}

                <div className='application'>
                    <br></br><br></br><br></br>
                    <label htmlFor="apply">Apply now</label>
                    <select className="select_course" id="exampleFormControlSelect1">
                        <option>course 1</option>
                        <option>course 2</option>
                        <option>course 3</option>
                        <option>course 4</option>
                
                    </select>
                    

                    {/* expected student count number as input */}
                    <br></br>
                    <label htmlFor="student_count">Expected student count</label>
                    <input type="text" name="student_count" id="student_count" value={email} onChange={(e)=>setEmail(e.target.value)}/>

      
                </div>

                <button type='submit'>Apply</button>

                {/* =============================================== */}
                
               <div className="form-group">
                    <br></br><br></br><br></br>
                    <label htmlFor="resume">Resume</label>
                    <input type="file" className="form-control-file" id="resume" value={resume} onChange={(e)=>setResume(e.target.value)}/>
                </div>

                <button type='submit'>Upload</button>

                {/* =============================================== */}

                <div className="form-group">

                    <br></br><br></br><br></br>

                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                
                    </select>
                </div>

                <button type='submit'>Submit</button>


            </form>
        </div>
        
    )

    //create resume upload window


}

// function to create upload resume window
function UploadResume() {
    const [resume, setResume]=useState("");
    const [dataInput, setDataInput]=useState('');

    const submitThis=(e)=>{
        e.preventDefault();
        const info={resume:resume};
        setDataInput([info]);
        console.log(resume);
    }

    return (
        <div>
            <form action="" onSubmit={submitThis}>
                <div>
                    <label htmlFor="resume">Upload Resume 2</label>
                    <input type="file" name="resume" id="resume" value={resume} onChange={(e)=>setResume(e.target.value)}/>
                </div>
                <button type='submit'>Upload second time</button>
            </form>
        </div>
    )
}



// function to show the resume
function ShowResume() {
    return (
        <div>
            <h1>Resume</h1>
        </div>
    )
}

// export all the functions
export {Learner,UploadResume,ShowResume};
