import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>

      <div style={{width:'100%', height:70 , backgroundColor:'#000000' , display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
        <div>
          <ul >
            <li style={{display:'inline-block' , marginLeft:50}}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/">Home</Link>
            </li>
          
            <li style={{display:'inline-block' , marginLeft:50}}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/contact">Contact</Link>
            </li>

            <li style={{display:'inline-block' , marginLeft:50}}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Navbar