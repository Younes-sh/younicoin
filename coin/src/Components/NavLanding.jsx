import React from 'react'
import {Link} from 'react-router-dom';


const NavLanding = () => {
  return (
    <div className='Navbar'>

      <div >
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        
          <li>
            <Link to="/signup">Signup</Link>
          </li>

         
        </ul>
      </div>
      
    </div>
  )
}

export default NavLanding