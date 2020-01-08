import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navigation">
          <h2 className="title">Suncoast Overflow</h2>
          <ul>
            <li>Products</li>
            <li>Customers</li>
            <li>Case Studies</li>
          </ul>
          <Link to="/createquestion">
            <input
              className="btn-question"
              type="button"
              value="Got Question?"
            />
          </Link>

          <Link to="/home">Go Home</Link>
        </nav>
      </div>
    </>
  )
}

export default NavBar
