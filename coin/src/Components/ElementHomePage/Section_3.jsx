import React from 'react';
import Image_1 from '../../asset/NFT_1.png'
import Image_2  from '../../asset/NFT_2.png'
import styled from '@emotion/styled';

const Div = styled.div`
    width:70%;
    height:700px;
    margin-top:100px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    gap:5px

    @media (max-width:1103px) {
        flex-direction:column;
        justify-content:center;
    }

    div{
        width:40%;
        height:auto;
        // background-color:red;
        @media (max-width:1103px){
            display:flex;
        }
    }
    :nth-child(){
        background-color:green;
    }
`;
const Img = styled.img`
    width:90%;
`;

const Section_3 = () => {
    return (
        <Div>
            <div>
                <h1> Binance NFT - Choice,
                    Security, & Reliability </h1>
                <h2>All in one place</h2>
            </div>
            <div>
                <div>
                    <Img src={Image_1} alt='NFT'/>
                </div>
                <div>
                    <Img src={Image_2} alt='NFT'/>
                </div>
            </div>
        </Div>
    )
}

export default Section_3