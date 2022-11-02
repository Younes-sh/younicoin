import React from 'react';
import styled from '@emotion/styled';
import landescapMobile from '../../asset/mobile3.png';

const Div = styled.div`
    width:70%;
    height:700px;
    padding:50px;
    display:flex;
    justify-center:center;
   
    div {
        width:90%;
        padding:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media screen and (max-width:1400px){
        flex-direction: column;
    }
`;
const Img = styled.img`
    width:100%;
`;



const Section_2 = () => {
    return (
        <Div>
                <div>
                    <Img src={landescapMobile} />
                </div>
                <div>
                    <h1>Buy, trade, and hold 350+ cryptocurrencies on Binance</h1>
                    <p>Trade some of the world’s largest and most popular companies, including Amazon, Netflix, Tesla and many more.  </p>
                    <p>Maximise your trading opportunities with CFD shares and benefit from the price movements with a lower investment. MultiBank Group offers more than 20,000 shares to choose from the largest multinational companies, with margin requirements as low as 5%. </p>
                </div>
        </Div>
    )
}

export default Section_2