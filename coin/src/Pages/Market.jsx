import React from 'react'
// import Coins from '../Components/Apicoin';
import Coins from '../Components/Test'
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
  height: 600px;
  margin-top: 40px;
  background-color:orange;
 
`;
const ContainerCoin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Home = () => {
    return (
       
      <Homes className='Home' sx={{color:'white'}}>
        <Graph>
            <Tab />
        </Graph>
        <ContainerCoin>
          <Coins />
        </ContainerCoin>
      </Homes>
    )
  }


export default Home ;