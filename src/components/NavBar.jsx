import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navigation">
          <Link to="/">Suncoast Overflow</Link>
          <Link to="/createquestion">Add A Question</Link>
        </nav>
      </div>
    </>
  )
}

export default NavBar
