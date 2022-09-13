import React from 'react'
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div>

      <div style={{width:'100%', height:70 , backgroundColor:'#000000' , display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
        <div style={{width:'50%'}}>
          <ul style={{ width:400 ,display:'flex' , justifyContent:'space-around'}}>
            <li style={{display:'inline-block' }}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/">Home</Link>
            </li>
          
            <li style={{display:'inline-block' }}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/contact">Contact</Link>
            </li>

            <li style={{display:'inline-block' }}>
              <Link style={{color:'wheat' , textDecoration:'none'}} to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div style={{width:'50%' , display:'flex' , justifyContent:'end' , padding:50}}>
          <Logo />
        </div>

      </div>
      
    </div>
  )
}

export default Navbar