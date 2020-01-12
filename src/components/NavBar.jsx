import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navigation">
          <Link className="nav" to="/">
            Suncoast Overflow
          </Link>
          <Link className="nav" to="/createquestion">
            Ask A New Question
          </Link>
        </nav>
      </div>
    </>
  )
}

export default NavBar
