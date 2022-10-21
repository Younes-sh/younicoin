import React from 'react'
import Coins from '../Components/Apicoin';
import Tab from '../Components/Tab/Tab'
import styled from 'styled-components';

const Homes = styled.div`
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const Graph = styled.div`
  width: 80%;
  margin-top: 40px;
  background-color:orange;
 
`;

const Home = () => {
    return (
       
                  <Homes className='Home' sx={{color:'white'}}>

                        <Graph>
                            <Tab />
                        </Graph>
                        <div className='Coin'>
                          <Coins />
                        </div>
                
                  
                  </Homes>
    )
  }


export default Home ;