import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to={'/'}>
        HIMS
      </Link>
      <Link to={'/login'}>
        Login
      </Link>
    </div>
  )
}

export default Navbar
