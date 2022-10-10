import React from 'react'
import Coins from '../Components/Apicoin';
import CHART from '../Components/Chart/Chart';


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
          <CHART />
          </div>
        </div>
       
      </div>
    )
  }
}

export default Home