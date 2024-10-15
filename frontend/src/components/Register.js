import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleRegister = async (data) => {
        const { username, email, password, confirmPassword, isAdmin } = data;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                email,
                password,
                isadmin: isAdmin
            });
            if (response.status === 201) {
                alert('User created successfully');
                reset();
                navigate('/login');
            } else {
                alert('Failed to create user');
            }
        } catch (error) {
            console.error(error);
            alert('Already exist user/email !')
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className='reg-mainpage'>
            <form onSubmit={handleSubmit(handleRegister)} className='regform'>
                <center> <h2>Registration</h2>
                </center>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        {...register("username", {
                            required: 'Username is required',
                            minLength: { value: 5, message: 'At least 5 characters are required' },
                            pattern: { value: /^[a-zA-Z ]+$/, message: 'Only alphabets are allowed' }
                        })}
                    />
                    {errors.username && <span className="error-message">{errors.username.message}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type=''
                        {...register("email", {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' }
                        })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 8, message: 'At least 8 characters are required' }
                        })}
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        {...register("confirmPassword", {
                            required: 'Confirm Password is required',
                            minLength: { value: 8, message: 'At least 8 characters are required' }
                        })}
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
                </div>
                <center> <button type='submit'>Register</button>
                </center>

                <div className="or-divider"><br></br><center>or</center></div>
                <center><button type='button' onClick={handleLoginClick}>Login</button>
                </center>
            </form>
        </div>
    );
};

export default Register;




