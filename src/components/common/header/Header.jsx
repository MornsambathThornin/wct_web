import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/laptop'>Laptop</Link>
              </li>
              <li>
                <Link to='/phone'>Phone</Link>
              </li>
              <li>
                <Link to='/accesories'>Accesories</Link>
              </li>
              <li>
                <Link to='/guide'>Buy Guide</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link to='/login'>Log In</Link>
              </li>
              
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header