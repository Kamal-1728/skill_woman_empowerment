import React from 'react'
import { useState } from 'react';

function Volunteer() {
    const [email,setEmail]=useState(""); 
    const [passw, setPassw]=useState(""); 
    const [dataInput, setDataInput]=useState('');

    const submitThis=(e)=>{
        e.preventDefault();
        const info={email:email,passw:passw}; 
        setDataInput([info]);
        console.log(email);
    }

  return (
    <div>
            <form action="" onSubmit={submitThis}>
                {/* <div className='loginvol'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>

                {/* =============================================== */}

                {/* <div className='passvol'>
                    <label htmlFor="passw">Password</label>
                    <input type='text' name='passw' id='passw' value={passw} onChange={(e)=>setPassw(e.target.value)}/>
                </div>
                <button type='submit'>Login</button>
                } */}
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
                
                </div>
                <button type='submit'>Apply</button>

                {/* =============================================== */}
                
                {/* Ask them to rate 5 skills from 0 to 5 */}

                <div className='rate_skills'>
                    <br></br><br></br><br></br>
                    <label htmlFor="rate_skills">Rate skills</label>
                    <select className="select_course" id="exampleFormControlSelect1">
                        <option>skill 1</option>
                        <option>skill 2</option>
                        <option>skill 3</option>
                        <option>skill 4</option>
                        <option>skill 5</option>
                    </select>
                    <select className="select_course" id="exampleFormControlSelect1">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button type='submit'>Rate</button>
                </div>


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
}

export default Volunteer

