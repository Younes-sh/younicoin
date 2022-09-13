import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>

      <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar