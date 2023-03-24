import React from 'react';
import { useState } from 'react';
import './app.css';
import FormInput from './components/FormInput';
//import axios from 'axios';

const App = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'username@sdu.edu.kz',
            errorMessage: 'Username cannot be found !',
            label: 'Email Address'
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Enter Password',
            errorMessage: 'Password  is not correct !',
            label: 'Password'
        }
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    async function signin(e) {
        e.preventDefault();
        
        try {
            const {email, password} = values;
            
            const response = await fetch('http://localhost:8800/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            
            console.log(response);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

  return (
        <div className="app">
            <form onSubmit={signin}>
                <h1 className='hello'>Hello!</h1>
                <h1 className='phrase'>Welcome Back.</h1>
                {inputs.map(input => (
                    <FormInput 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}   
                <button>Sign In</button> 
            </form>
        </div>
  )  
}

export default App