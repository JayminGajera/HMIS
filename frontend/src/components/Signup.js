import React from 'react'
import { useState } from 'react';

const signup = () => {
  
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [mobile,setMobile] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "mobile"){
            setMobile(value);
        }

    }

    const handleSubmit  = async(e) => {
        e.preventDefault();

        const credentials = {
          username,
          password,
          email,
          mobile
         };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const responce = await fetch("http://localhost:5000/register",{
            method:  'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formData),

        });
        const data =await responce.json();
        console.log(data);
    }catch(error){
        console.log('error while register');
    }
  };

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">user Name </label>
                    <input className="form__input" type="text" value={username} onChange = {(e) => handleInputChange(e)} id="username" placeholder="user Name"/>
                </div>
                
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">mobile no </label>
                    <input className="form__input" type="number" id="mobile" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="mobile"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )    
  
}

export default signup;
