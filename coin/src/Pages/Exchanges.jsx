import React from 'react'
import styled from '@emotion/styled'
import Binance from '../asset/Img/binance.png'
import CryptoCom from '../asset/Img/crypto-com.png'
import  CheckCrypto  from "../asset/icon/checkmark_crypto.png";
import  CheckBinance  from "../asset/icon/checkmark_binance.png";
const Exchanges = styled.div`
  width:100%;
  height:auto;
  margin-top:90px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
`;
const Container = styled.div`
  width:75%;
  height:100vh;
  display:flex;
  gap:2px;
  @media (max-width:1180px){
    flex-direction:column;
  }
`;
const Exchange = styled.div`
  width:100%;
  height:700px;
  padding:20px 5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  // border:solid 1px gray;
  // border-radius:7px;
  
  div {
    text-align:left;
    padding:7px;
    p {
      max-width:90%;
      padding: 0 10px
    }

    h3 {
      max-width:90%;
      padding: 0 10px
    }
  }

`;
const Img = styled.img`
  width:30%;
`;
const Icons = styled.img`
  width:25px;
`;

const A = styled.a`
  text-decoration:none;
  color:white;
  padding:5px 25px;
  border-radius:5px;
  background-color:#203250;
  :hover {
    background-color:#103255;
  }
`;


const Contact = () => {
  return (
    <Exchanges className=''>
      <Container>
        <Exchange >
            <Img src={Binance}  alt='crypto' />
            <h2>Binance</h2>

            <div>
              <h3>Buy, trade, and hold 350+ cryptocurrencies on Binance</h3>
              <p><Icons src={CheckBinance}/> 0 trading fee on selected Bitcoin (BTC) spot trading pairs now
                Lowest transactions fees  0.10%</p>
                <p><Icons src={CheckBinance}/>Automatically invest on a scheduled basis with dollar-cost averaging</p>
                <p><Icons src={CheckBinance}/>Experience our low trading fees
</p>
                <A href="https://www.binance.com/en/activity/referral-entry/CPA?fromActivityPage=true&ref=CPA_00LPW4KS0U" target={'blank'}  class="active">Getstart</A>
            </div>
        </Exchange>
        <Exchange >
            <Img src={CryptoCom}  alt='crypto' />
            <h2>Crypto.com</h2>
            <div>
              <h3>The World’s Fastest Growing 
              Crypto App</h3>
              
              <p><Icons src={CheckCrypto}/>  Join 50m+ users buying and selling 250+ cryptocurrencies at true cost</p>
              <p><Icons src={CheckCrypto}/>Spend with the Crypto.com Visa Card and get up to 5% back</p>
              <p><Icons src={CheckCrypto}/>Grow your portfolio by receiving rewards up to 14.5% on your crypto assets</p>
              <A href="https://crypto.com/app/hcqzker1sy" target={'blank'}  class="active">Getstart</A>

            </div>
        </Exchange>
      </Container>
    </Exchanges>
  )
}

export default Contact