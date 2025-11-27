import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
 import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword  } from "firebase/auth";



const Signup = () => {
  const navigate = useNavigate();
  const [semail, setEmail] = useState("")
  const [spassword, setPassword] = useState("")
  const [sname, setName] = useState("")
  function handle_signup_email(e){
    setEmail(e.target.value)
  }

  function handle_signup_name(e){
    setName(e.target.value)
  }
  function handle_signup_password(e){
    setPassword(e.target.value)
  }
  function signin(e){
      e.preventDefault();
    createUserWithEmailAndPassword(auth, semail, spassword)
  .then(() => {
    // Signed up 
    alert("account created successfully")
    navigate("/")
    setEmail('')
    setPassword('')
    setName('')
    
    
    // ...
  })
  .catch((error) => {
    if(error.code==="auth/email-already-in-use"){
      alert("this account already in use")
      setEmail('')
      setPassword('')
      setName('')
      
    } else if(error.code==="auth/weak-password"){
      alert(" Password should be at least 6 characters")
      setEmail('')
      setPassword('')
      setName('')
    } else{
      alert(error.code)
      setEmail('')
      setPassword('')
      setName('')
    }
    
    // ..
  });

  }
  
  const fieldStyle = {
    display: 'block',
    width: '100%',
    padding: '10px 12px',
    marginTop: '6px',
    borderRadius: 6,
    border: '1px solid #d1d5db',
    fontSize: 14,
    outline: 'none',
  }

  return (
    <div
      style={{
        height: '100vh', // use full viewport height
        display: 'flex',
        alignItems: 'center', // vertical center
        justifyContent: 'center', // horizontal center
        background: '#f9fafb', // light background
        padding: 10,
        boxSizing: 'border-box',
        width:'100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 386,
          background: '#fff',
          padding: 28,
          borderRadius: 12,
          boxShadow: '0 6px 18px rgba(15,23,42,0.08)',
        }}
      >
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
          Create your account
        </h2>
        <p style={{ marginTop: 6, marginBottom: 18, color: '#6b7280' }}>
          Join us — fast signup with simple validation.
        </p>

        <form>
          <label style={{ fontSize: 13, color: '#374151' }}>Full name</label>
          <input name="name" style={fieldStyle} placeholder="Jane Doe" value={sname}
           onChange={(e)=> handle_signup_name(e)}
          />

          <label style={{ fontSize: 13, color: '#374151', marginTop: 12 }}>
            Email
          </label>
          <input name="email" style={fieldStyle} placeholder="you@example.com" value={semail}  onChange={(e)=> handle_signup_email(e)}/>

          <label style={{ fontSize: 13, color: '#374151', marginTop: 12 }}>
            Password
          </label>
          <input 
          value={spassword}
            name="password"
            type="password"
            style={fieldStyle}
            placeholder="At least 8 characters"
            onChange={(e)=> handle_signup_password(e)}
          />



          <button
            type="submit"
            onClick={(e)=>signin(e)}
            style={{
              marginTop: 16,
              width: '100%',
              padding: '12px 14px',
              background: '#111827',
              color: '#fff',
              borderRadius: 8,
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Create account
          </button>
        </form>

        <div style={{ marginTop: 16, fontSize: 13, color: '#6b7280' }}>
          <Link to='/login' style={{ color: '#111827', fontWeight: 600 }}>Already have an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup


















