import React from 'react'
import Coins from '../Components/Apicoin';
import Tab from '../Components/Tab/Tab'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'



const Home = () => {
  // constructor(props){
  //   super(props)
  // }


    return (
        <Grid   container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={0}>
                <Box sx={{color:'white' , marginTop:'20px'}}>
                  <div className='Home' >

                      <div className='chart-coin'>
                        <div className='Graph'>
                            <Tab />
                        </div>
                        <div className='Coin'>
                          <Coins />
                        </div>
                      </div>
                
                  
                  </div>
                </Box>
        </Grid>
    )
  }


export default Home ;