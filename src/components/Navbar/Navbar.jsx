import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {
    const [active, setactive] = useState(false);
    const [open, setOpen] = useState(false);
    const isActive = () => {
        window.scrollY > 0 ? setactive(true) : setactive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUSer = {
        id: 1,
        username: "John Dae",
        isSeller: true
    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                    {/* <Link to='/'> */}
                    <span className='text'>fiverr</span>
                    {/* </Link> */}

                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiverr Buisness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUSer?.isSeller && <span>Become a Seller</span>}
                    {!currentUSer && <button>Join</button>}
                    {
                        currentUSer && (
                            <div className='user' onClick={()=> setOpen(!open)}>
                                <img  alt="" />
                                <span>{currentUSer?.username}</span>
                                { open && 
                                <div className='options'>
                                    {currentUSer?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add new Gigs</span>
                                        </>
                                    )}
                                    <span>Orders</span>
                                    <span>Message</span>
                                    <span>Log out</span>
                                </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className='menu'>
                        <span>Test</span>
                        <span>Tes2</span>
                    </div>
                </>)
            }
        </div>
    )
}
