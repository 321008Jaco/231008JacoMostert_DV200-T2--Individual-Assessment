import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                toast.success('Login Successful. Welcome!');
                navigate('/Home');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={loginUser}>
                <h2 className="register-title">Login</h2>
                <label className="register-label">Email</label>
                <input className="register-input" type='email' placeholder='Enter Email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <label className="register-label">Password</label>
                <input className="register-input" type='password' placeholder='Enter Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button className="register-button" type='submit'>Login</button>
            </form>
        </div>
    );
}
