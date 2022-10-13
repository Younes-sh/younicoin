import React from 'react';
import TradeViewChart from 'react-crypto-chart';


 const BTCUSDT = () => {
  return(
    <div className='parent'>
       <h3>BTC/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '700px',
          minWidth: '1200px',
          marginBottom: '30px',
        }}
        pair="BTCUSDT"
      />
    </div>
  )
}

 const ADAUSDT = () => {
  return (
    <div className='parent'>
       <h3>ADA/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '700px',
          minWidth: '1200px',
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
          minHeight: '700px',
          minWidth: '1200px',
          marginBottom: '30px',
        }}
        pair="ETHUSDT"
      />
    </div>
  )
}

    


      
export  { BTCUSDT, ADAUSDT , ETHUSDT  };