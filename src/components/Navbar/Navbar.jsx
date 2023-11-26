import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import { useEffect } from "react";
import newRequset from "../../utils/newRequest";
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setactive(true) : setactive(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);




  const currentUSer = JSON.parse(localStorage.getItem('currenctUser'));

  const handleLogout = async () => {
    try {
      await newRequset.post('/auth/logout')
      localStorage.setItem('currenctUser', null);
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <Link to="/login" className="link">
            <span>Sign in</span>
            </Link>
          {!currentUSer?.isSeller && <span>Become a Seller</span>}
          {!currentUSer &&  <Link to="register" className="link"><button >Join</button> 
          </Link>}
          {currentUSer && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img alt="" src={currentUSer.img || "/img/noavatar.jpg"} />
              <span>{currentUSer?.username}</span>
              {open && (
                <div className="options">
                  {currentUSer?.isSeller && (
                    <>
                      <Link to="/myGigs" className="link">Gigs</Link>
                      <Link to="/add" className="link">Add new Gigs</Link>
                    </>
                  )}
                  <Link to="/orders" className="link">Orders</Link>
                  <Link to="/message" className="link">Message</Link>
                  <Link onClick={handleLogout} className="link">Log out</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">

              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        ))}
    </div>
  );
}
