import React from 'react';
import TradeViewChart from 'react-crypto-chart';
import Box from '@mui/material/Box';


 const BTCUSDT = () => {
  return(
    <Box style={{width:'100%'}}>
        <div className='parent'  >
        <h3>BTC/USDT</h3>
        <TradeViewChart 
          containerStyle={{
            minHeight: '450px',
            minWidth: '100px',
            marginBottom: '30px',
          }}
     
          pair="BTCUSDT"
        />
      </div>
    </Box>

  )
}

 const ADAUSDT = () => {
  return (
      <div className='parent'>
        <h3>ADA/USDT</h3>
        <TradeViewChart
          containerStyle={{
            minHeight: '450px',
            minWidth: '100px',
            marginBottom: '30px',
          }}
     
          pair="ADAUSDT"
        />
      </div>
  )
}


 const ETHUSDT = () => {
  return (
      <div className='parent'>
          <h3>ETH/USDT</h3>
        <TradeViewChart
          containerStyle={{
            minHeight: '450px',
            minWidth: '100px',
            marginBottom: '30px',
          }}
     
          pair="ETHUSDT"
        />
      </div>
  )
}

    


      
export  { BTCUSDT, ADAUSDT , ETHUSDT  };