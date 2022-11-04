import React  from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    width:75%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:950px) {
        
        flex-direction:column;
    }
    div {
        margin-top:55px;
        width:80%;
        display:flex;
        @media (max-width:950px) {
            width:80%;
            flex-direction:column;
        }
    }
    `;
    const Elements = styled.div`
        min-width:30px;
        height:200px;
        margin: 10px 5px;
        padding:20px;
        display:flex;
        flex-direction:column;
        border-radius:5px;
        // -----------------
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        :hover {
            box-shadow: 0 4px 8px 0 rgba(70, 150, 131, 0.8), 0 6px 20px 0 rgba(0, 0, 20, 0.19);
        }
    `;
const Child = styled.div`
  
`;
const Section_2 = () => {

    return (

  
        <Div>
            <div >
                <Elements>
                    <h3>$76 billion</h3>
                    <span>24h trading volume on Binance exchange</span>
                </Elements>


                {/* ---------------------------------------- */}

                <Elements>
                    <h3>350+</h3>
                    <span>Cryptocurrencies listed</span>
                </Elements>
            </div>
            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
            <div >
                <Elements>
                    <h3>120 million</h3>
                    <span>Registered users</span>
                </Elements>

                {/* ---------------------------------------- */}

                <Elements>
                    <h3>0.10%</h3>
                    <span>Lowest transaction fees</span>
                </Elements>
            </div>
        </Div>
    )
}

export default Section_2