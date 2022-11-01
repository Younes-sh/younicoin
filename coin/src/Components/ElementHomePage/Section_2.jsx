import React from 'react';
import styled from '@emotion/styled';
const Div = styled.div`
    width:70%;
    height:700px;
    padding:50px;
    background-color:gray;
`;

const Section_2 = () => {
    return (
        <Div>
            <div>
                <h3>$76 billion</h3>
                <span>24h trading volume on Binance exchange</span>
                <h3>350+</h3>
                <span>Cryptocurrencies listed</span>
            </div>
            <div>
                <h3>120 million</h3>
                <span>Registered users</span>
                <h3>0.10%</h3>
                <span>Lowest transaction fees</span>
            </div>
        </Div>
    )
}

export default Section_2