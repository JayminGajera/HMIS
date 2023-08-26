import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to={'/'} className='option'>
       HIMS 
      </Link>
      <Link to={'/login'} className='option'>
        Login
      </Link>
      <Link to={'/signup'} className='option'>
        signup
      </Link>
    </div>
  )
}

export default Navbar
