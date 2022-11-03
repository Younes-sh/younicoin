import React from 'react';
import Image_1 from '../../asset/NFT_1.png';
import Image_2  from '../../asset/NFT_2.png';
import Image_3  from '../../asset/NFT_3.png';
import Image_4  from '../../asset/NFT_4.png';
import  './Section3.css'
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
`;
const Picture = styled.div`
    width: 70%;
    max-height: 200px;
    padding: 10px;
    position: relative;
   
`;
const Img = styled.img`
    position: absolute;
`;

const Section_3 = () => {
    return (
        <Div>
            <div>
                <h1> Binance NFT - Choice,
                    Security, & Reliability </h1>
                <h2>All in one place</h2>
            </div>
            <Picture>
                <Img className='image1' src={Image_1} alt='NFT1'/>                       
                <Img className='image2' src={Image_2} alt='NFT2'/>                       
                <Img className='image3' src={Image_3} alt='NFT3'/>                       
                <Img className='image4' src={Image_4} alt='NFT4'/>                       
            </Picture>
        </Div>
    )
}

export default Section_3