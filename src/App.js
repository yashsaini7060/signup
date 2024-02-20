import React, { useState } from "react";

function App() {

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [confpassword, setConfPassword] =useState('');

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);


  const validEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(input))
    setEmail(input);
  }

  const validPassword = (input) =>{
    console.log(input.length)
    if(input.length>=8){
      setPasswordValid(true);
    }else{
      setPasswordValid(false);
    }
    setPassword(input)
  }

  const confirmPass = (input) =>{
    console.log(input)
    console.log(password)
    setConfirmPasswordValid(input===password);
    setConfPassword(input)
  }

  return (
    <div className="form">


      <label>Email:</label>
      <input type="email" value={email} 
        style={ !emailValid ? { border: '2px solid red' } : {}}
        onChange={(e)=>{
          validEmail(e.target.value);
        }}/>
      {(!emailValid) ? <p className="invalidemail" >Invalid email format</p> : ''}




      <label>Password:</label>
      <input type="password" value={password} 
        style={ !passwordValid ? { border: '2px solid red' } : {}}
        onChange={(e)=>{
          validPassword(e.target.value);
        }}/>
      {(!passwordValid) ? <p className="invalidpass">Password must be at least 8 character</p> : ''}




      <label>Confirm Password:</label>
      <input type="password" value={confpassword} 
        style={ !confirmPasswordValid ? { border: '2px solid red' } : {}}
        onChange={(e)=>{
          confirmPass(e.target.value);
        }}/>
      {(!confirmPasswordValid) ? <p className="invalidcnfpass">Password do not  match</p> : ''}




      <button onClick={() => {
        if(emailValid && passwordValid && confirmPasswordValid){
          alert("Form submitted successfully!!!");
        } else{
          alert("Form cannot be submitted!!!");

        }
      }}>Submit</button>
    </div>

  )
};

export default App;