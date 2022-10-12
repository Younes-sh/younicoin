import React from 'react'
import Coins from '../Components/Apicoin';
import CryptoChart from '../Components/Crypto/Crypto'

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render () {

    return (
      <div className='Home' >
        <div className='chart-coin'>
          <div className='Coin'>
            <Coins />
          </div>
          <div className='Graph'>
            <CryptoChart />
          </div>
        </div>
       
      </div>
    )
  }
}

export default Home