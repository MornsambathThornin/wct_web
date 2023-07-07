import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  //make a logout function with authentification
  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  //check if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  useState((e) => {
    const data = localStorage.getItem("user");
    if (data) {
      setLoggedIn(true);
    }
  });

  //return navbar

  return (
    <>
      <Head />
      <header>
        {
          //if user is logged in show logout button
          loggedIn ? (
            <div className="container paddingSmall">
              <nav>
                <ul
                  className={navbar ? "navbar" : "flex"}
                  onClick={() => setNavbar(false)}
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/recommend">Recommend</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={logout}>
                      Log out
                    </Link>
                  </li>
                </ul>
                <button className="barIcon" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <i className="fa fa-times"></i>
                  ) : (
                    <i className="fa fa-bars"></i>
                  )}
                </button>
              </nav>
            </div>
          ) : (
            //if user is not logged in show login button
            <div className="container paddingSmall">
              <nav>
                <ul
                  className={navbar ? "navbar" : "flex"}
                  onClick={() => setNavbar(false)}
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link to="/recommend">Recommend</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </ul>
                <button className="barIcon" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <i className="fa fa-times"></i>
                  ) : (
                    <i className="fa fa-bars"></i>
                  )}
                </button>
              </nav>
            </div>
          )
        }
      </header>
    </>
  );
};

export default Header;
