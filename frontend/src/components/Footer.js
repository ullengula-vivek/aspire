import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div id='contact'>
        <Link to='https://www.instagram.com/v7vek_u/' id='insta'>Instagram</Link>
        <Link to='https://www.linkedin.com/in/vivek-ullengula-6a876b1b8' id='link'>LinkedIn</Link>
        </div>
        <div>
            <h3 id='sign'> &#169; Vivek</h3>
        </div>
    </>
  )
}

export default Footer