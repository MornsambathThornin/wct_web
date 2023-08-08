import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <Link  to='/' > <img src='../images/logo.png' alt='' /> </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
