import './Login.css'; // Adjust if file name differs
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            if (response.status === 200) {
                const { isAdmin } = response.data;

                alert('Login successful');

                
                if (isAdmin) {
                    navigate('/admin'); 
                } else {
                    navigate('/');
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Invalid email or password');
            } else if (error.response && error.response.status === 404) {
                alert('User not registered. Redirecting to signup page...');
                navigate('/signup');
            } else {
                console.error(error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='logmain'>
            
                <form onSubmit={handleSubmit} className='logform'>
                    <center><h2>LOGIN FORM</h2></center>
                    <div>
                        <label>Email:</label><br />
                        <input type='' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <br />
                    <div>
                        <label>Password:</label><br />
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <br />
                    <center>
                    <button type='submit'>Login</button>
                    <br /><p>or</p>

                    <button type='button' onClick={handleSignupRedirect}>Signup</button>
                    </center>

                </form>
            
        </div>
    );
};

export default Login;
