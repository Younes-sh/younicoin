import React from 'react'
import Coins from '../Components/Apicoin';
import Tab from '../Components/Tab/Tab'
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const Div = styled.div`
  color:white;
  margin-top: 60px;
`;
const Graph = styled.div`
  background-color:orange;
`;

const Home = () => {
    return (
        <Grid   container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={0}>
                  <Div className='Home' sx={{color:'white'}}>

                        <Graph className='Graph' style={{marginTop:'60px'}}>
                            <Tab />
                        </Graph>
                        <div className='Coin'>
                          <Coins />
                        </div>
                
                  
                  </Div>
        </Grid>
    )
  }


export default Home ;