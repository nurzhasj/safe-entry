import React from 'react';
import './login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/FormInput';

const Login = () => {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

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

            const data = await response.json();
            localStorage.setItem('token', data.accessToken);
            
            if (response.ok) {
                navigate('/dashboard');
            }
    
            return response;
        } catch (err) {
            console.log(err);
        }
    }

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

  return (
    <div className="app">
        <form onSubmit={signin}>
            <h1 className='hello'>Enter to Safe Entry System !</h1>
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
        
        <div className="imgBlock">
            <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2021/opinion/shutterstock1747856960-1640014198.jpg" alt=""/>  
        </div>
    </div>
  )
}

export default Login