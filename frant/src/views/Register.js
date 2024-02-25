import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Register = (props) => {

    const submitForm = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('event target usrername', event.target.username.value)
        // Get form data
        const formData = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            password2: event.target.password2.value,
        };
    
        console.log('formdata', formData['username'], formData['email'], formData['password'], formData['password2'],)
        try {
            // Send a POST request to your backend API
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username: formData['username'],
                email: formData['email'],
                password: formData['password'],
                password2: formData['password2'],
            });
    
            console.log('Registration successful:', response.data);
            // Handle successful registration (e.g., show a success message)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure (e.g., show an error message)
        }
    };

  return (
    <div className="">
        <form onSubmit={submitForm}>
            <div>
                <label>Name</label>
                <input type="text" name="username" placeholder="Name"></input>
            </div>

            <div>
                <label>E-mail</label>
                <input type="email" name="email" placeholder="e-mail"></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password"></input>
            </div>

            <div>
                <label>Repeat password</label>
                <input type="password" name="password2" placeholder="Repeat your password"></input>
            </div>

            <div>
                <button type="submit">Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Register;