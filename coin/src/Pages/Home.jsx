import React from 'react'
import Coins from '../Components/Apicoin';
import Tab from '../Components/Tab/Tab'

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render () {

    return (
      <div className='Home' >
        {/* <TextAnimation /> */}
        {/* <Marquee />
         */}
        {/* <TextMove /> */}
        <div className='chart-coin'>
          <div className='Coin'>
            <Coins />
          </div>
          <div className='Graph'>
              <Tab />
          </div>
        </div>
       
      </div>
    )
  }
}

export default Home ;