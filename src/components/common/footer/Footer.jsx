import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container flexSB paddingTB'>
          
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className='fa fa-envelope'><span>  hello@beautiful.com </span></i>
            <i className='fa fa-headphones'><span>  +855 123456789</span></i>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer
