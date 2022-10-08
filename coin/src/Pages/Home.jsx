import React from 'react'
import Coins from '../Components/Apicoin';
import { css } from '@emotion/react';



const Home = () => {
  return (
    <div className='w-full h-screen bg-red-400' >
      <h1>Younes</h1>
      <span>sheikhlar</span>

        <Coins />
    </div>
  )
}

export default Home