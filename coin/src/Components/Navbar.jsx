import React from 'react'
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

const LinkSX = {
  "&:hover": {
    color: "rgba(255,240,10,0.8)",
  },
};

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Box sx={{display:'flex' , backgroundColor:'#2d2a36'}}>
        <div >
          <ul style={{ display:'flex' }}>
            <li style={{ listStyleType:'none' , margin:15}} >
              <Link style={{color:'white', textDecoration:'none'}} sx={{LinkSX}}  to="/">Home</Link>
            </li>
          
            <li style={{ listStyleType:'none' , margin:15}}  >
              <Link style={{color:'white', textDecoration:'none'}} sx={{LinkSX}} to="/contact">Contact</Link>
            </li>

            <li style={{ listStyleType:'none' , margin:15}}  >
              <Link style={{color:'white', textDecoration:'none'}} sx={{LinkSX}} to="/about">NFT</Link>
            </li>
          </ul>
        </div>
      </Box>

      
      
      
    </div>
  )
}

export default Navbar