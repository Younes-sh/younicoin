import React from 'react';
import styled from '@emotion/styled';
import secure from '../../asset/technologie.png';
const Div = styled.div`
width:70%;
height:700px;
margin-bottom:50px;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:1259px){
    flex-direction:column;
    align-items:;

}
`;

const ContainerImage = styled.div`
    width:60%;
    height:auto;
    position:relative;
    @media (min-width:1259px){
        width:40%;
    }
`;
const Img = styled.img`
    width:100%;
`;
const ContainerText = styled.div`
    div {
        padding:20px;
    }
    p {
        max-width:600px;
    }
    @media (max-width:1259px){
        margin-bottom:200px;
    }
`;


const Section_4 = () => {
    return (
        <Div>
            <ContainerImage>
                        <Img className='image1' src={secure} alt='NFT1'/> 
            </ContainerImage>
            <ContainerText>
                <div>
                    <h1>Security</h1>
                    <p>
                    Security is the number one priority at Binance. We have invested countless hours and resources into ensuring that our platform is safe from bad actors, including incorporating big data analysis and AI technologies to aid us in preventing attacks. We’ve even partnered with various cyber-security and compliance firms in the blockchain space. Yet, the best security partnership we can build is with the Binance community itself.
                    </p>
                </div>
            </ContainerText>
        </Div>
    )
}

export default Section_4