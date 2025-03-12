import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'



export default function Input() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  function handle() {
    if(!email || !Password){seterror(true)}
else{
  localStorage.setItem('email', email);
  navigate("Todo")
}

  }
  return (
    <div className="w-full h-screen bg-gradient-to-b from-cc2 to-cc1  ">
      <div className='mt-36 ml-36'>
<h1 className='text-6xl text-white'>Time to Work!</h1>
<div className='text-white flex flex-col mt-10'>
<label clas >Email</label>
<input className='bg-black rounded-md w-9/12 text-white p-2 mt-2' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='exemple@gmail.com' required/>
</div>

<div className='text-white flex flex-col mt-10' >
<label>Password</label>
<input className='bg-black rounded-md w-9/12 text-white p-2 mt-2'value={Password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='your password' required />
</div>
{error? (<p className='p-1 text-red-600'> please enter the email and password</p>): (<></>)}
<button className='bg-violet-200 text-cc1 font-bold rounded-2xl w-9/12 p-2 mt-10 hover:opacity-50' onClick={handle}>SIGN IN</button>
      </div>
    </div>
   
  )
}
