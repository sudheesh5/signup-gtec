import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/login",{email,password})
        .then(result =>{
            console.log(result);
            if (result.data === "Success") {
                navigate('/home'); // Navigate only if login is successful
            }
        })
        .catch(err=>{console.log(err);
            
        });
        
   
    
}
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary-vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
              
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder='Enter email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder='Enter your password'
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className='btn btn-default border w-100 bg-success rounded-0'>Login</button>
            </form>
           
        </div>

    </div>
  )
}

export default Login