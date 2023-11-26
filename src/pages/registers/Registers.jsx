import React, { useState } from 'react'
import './Registers.scss'
import upload from '../../utils/uploads'
import newRequset from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

function Registers() {
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
    })


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = await upload(file);
        try {
            const res = await newRequset.post('/auth/register', { ...user, img: url });
            console.log(res);
            navigate('/')
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const handleSeller = async (e) => {
        setUser((prev) => {
            return { ...prev, isSeller: e.target.checked }
        })
    }

    const handleChange = async (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }
    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <div className='left'>
                    <h1>Create new Account</h1>
                    <label htmlFor="">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="johndoe"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Password</label>
                    <input name="password" type="password" onChange={handleChange} />
                    <label htmlFor="">Profile Picture</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="">Country</label>
                    <input
                        name="country"
                        type="text"
                        placeholder="Usa"
                        onChange={handleChange}
                    />
                    <button type="submit">Register</button>
                </div>
                <div className='right'>
                    <h1>I want to become a seller</h1>
                    <div className="toggle">
                        <label htmlFor="">Activate the seller account</label>
                        <label className="switch">
                            <input type="checkbox" onChange={handleSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="">Phone Number</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="+1 234 567 89"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Description</label>
                    <textarea
                        placeholder="A short description of yourself"
                        name="desc"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    )
}

export default Registers
