import React from 'react';
import styled from '@emotion/styled';
import secure from '../../asset/protection.png';
const Div = styled.div`
width:70%;
height:700px;
margin-bottom:50px;
display:flex;
// background-color:gray;
`;

const ContainerImage = styled.div`
    width:50%;
    height:auto;
    // background-color:#102626; 
    position:relative;

    
`;

const Rotation = styled.div`
width:100%;
height:100%;
display:flex;
position:absolute;
justify-content:center;
align-items:center;
border-radius:50%;

`;
const Img = styled.img`
    width:100%;
`;
const ContainerTex = styled.div`

`;

const Section_4 = () => {
    return (
        <Div>
            <ContainerImage>
                    <Rotation className='Rotation'>
                        <Img className='image1' src={secure} alt='NFT1'/> 
                    </Rotation>
                <div style={{width:'100%',height:'100%',zIndex:9}}>
                    
                </div>
            </ContainerImage>
            <ContainerTex>
                <div></div>
            </ContainerTex>
        </Div>
    )
}

export default Section_4