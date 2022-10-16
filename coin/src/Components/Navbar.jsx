import React from 'react'
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';



const Navbar = () => {
  return (
      <div className='Navbar' sx={{width:'100%',display:'flex' , justifyContent:'center'}} >
        <Box sx={{ width:'100%',display:'flex' , backgroundColor:'#2d2a36'}}>
          <div>
            <ul style={{ display:'flex' }}>
              <li style={{ listStyleType:'none' , margin:15}} >
                <Link style={{color:'white', textDecoration:'none'}}  to="/">Home</Link>
              </li>
            
              <li style={{ listStyleType:'none' , margin:15}}  >
                <Link style={{color:'white', textDecoration:'none'}} to="/contact">Contact</Link>
              </li>

              <li style={{ listStyleType:'none' , margin:15}}  >
                <Link style={{color:'white', textDecoration:'none'}} to="/about">NFT</Link>
              </li>
            </ul>
          </div>
        </Box>
      </div>
  )
}

export default Navbar