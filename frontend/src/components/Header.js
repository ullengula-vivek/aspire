import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='navbar'>
        <h1>Say Cheese...!</h1>
        <nav id='anchor'>
            <Link to='/' href='/'>HOME</Link>
            <Link to='/api/contact' href='/'>CONTACT</Link>
        </nav>
    </div>
  )
}

export default Header