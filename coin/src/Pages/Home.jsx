import React from 'react'
import Coins from '../Components/Apicoin';
import CHART from '../Components/Chart/Chart';
// import TextMove from '../Components/TextMove/TextMove'
// import Marquee from '../Components/Marquee/Marquee'
// import TextAnimation from '../Components/TextAnimation/TextAnimation'
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
          <CHART />
          </div>
        </div>
       
      </div>
    )
  }
}

export default Home