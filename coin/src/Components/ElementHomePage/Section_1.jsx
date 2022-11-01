import React from 'react';
import styled from '@emotion/styled';
import landescapMobile from '../../asset/mobile3.png'
const Div = styled.div`
    width:70%;
    height:700px;
    padding:50px;
    display:flex;
    justify-center:center;
`;
const Img = styled.img`

`;
const Section_2 = () => {
    return (
        <Div>
                <div>
                    <Img src={landescapMobile} />
                </div>
                <div>
                    <h1>Buy, trade, and hold 350+ cryptocurrencies on Binance</h1>
                </div>
        </Div>
    )
}

export default Section_2