import React from 'react'
import './LoginSignup.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import person_icon from '../../assets/person.png'
import { useState } from 'react'

const LoginSignup = () => {

  const [action,setAction] = useState("Login");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password? <span>Click Here</span></div>}
    
      <div className="sumbit-container">
        <div className={action==="Login"?"sumbit gray":"sumbit"} onClick={()=>{setAction("Sign Up")}}>Sing Up</div>
        <div className={action==="Sign Up"?"sumbit gray":"sumbit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
