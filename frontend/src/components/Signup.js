// src/components/SignupForm.js
import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const responce = await fetch("http://localhost:5000/signup",{
            method:  'post',
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

<<<<<<< HEAD
  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
=======
    const handleSubmit  = async(e) => {
        e.preventDefault();

        const credentials = {
          username,
          password,
          email,
          mobile
         };

         try {
            const response =  await fetch('http://localhost:5000/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });

            setEmail('');
            setMobile('');
            setPassword('');
            setUsername('');
            const data = response.json;
            console.log(data);
        }catch (error) {
            console.error('Error during signup:', error);
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
>>>>>>> f959cd3e5a20e821ef125b7edbb47bed33e8be05
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
