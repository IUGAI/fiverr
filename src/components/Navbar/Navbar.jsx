import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
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

  const currentUSer = {
    id: 1,
    username: "John Dae",
    isSeller: true,
  };

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
          <span>Sign in</span>
          {!currentUSer?.isSeller && <span>Become a Seller</span>}
          {!currentUSer && <button>Join</button>}
          {currentUSer && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img alt="" />
              <span>{currentUSer?.username}</span>
              {open && (
                <div className="options">
                  {currentUSer?.isSeller && (
                    <>
                      <Link to="/gigs">Gigs</Link>
                      <Link to="/add">Add new Gigs</Link>
                    </>
                  )}
                  <Link to="/orders">Orders</Link>
                  <Link to="/message">Message</Link>
                  <Link to="/">Log out</Link>
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
