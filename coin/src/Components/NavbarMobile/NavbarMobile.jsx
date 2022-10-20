import React from 'react'
import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ModalSlid from '../ModalSlid/ModalSlide';
const NavbarMobile = () => {
    return(
        <div className='NavMobile'>

            <Box  sx={{width:'100%',display:'flex' ,justifyContent:'center',position:'relative'}}>
                <div >
                    <Box sx={{marginTop:'-20px'}}>
                        <ModalSlid />
                    </Box>
                        <ul style={{ display:'flex' }}>
                            <li style={{ listStyleType:'none' , margin:15}} >
                                <Link style={{color:'white', textDecoration:'none'}}  to="/"><HomeIcon /></Link>
                            </li>
                            
                            <li style={{ listStyleType:'none' , margin:15}}  >
                                <Link style={{color:'white', textDecoration:'none'}} to="/contact">Contact</Link>
                            </li>
                            <li style={{ listStyleType:'none' , margin:15}}  >
                                <Link style={{color:'white', textDecoration:'none'}} to="/about">NFT</Link>
                            </li>
                            <li style={{ listStyleType:'none' , margin:15}}  >
                                <Link style={{color:'white', textDecoration:'none'}} to="/seting"><MiscellaneousServicesIcon /></Link>
                            </li>
                        </ul>
                </div>
            </Box>
        </div>
    )
}
export default NavbarMobile;