import React, { useState } from 'react'
import newRequset from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom'
import './Login.scss'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await newRequset.post('/auth/login', { username, password });
            localStorage.setItem('currenctUser', JSON.stringify(res.data));
            console.log(res.data);
            navigate('/')
        } catch (err) {
            setError(err);
        }
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor=''>Username</label>
                <input type="text" name="username" placeholder='johndoe' onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor=''>Password</label>
                <input type="text" name="password" placeholder='johndoe' onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Button</button>
                {error && error}            </form>
        </div>
    )
}

export default Login
Login