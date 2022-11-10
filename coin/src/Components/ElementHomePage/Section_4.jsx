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
// background-color:gray;
@media (max-width:1259px){
    flex-direction:column;
}
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
                    <Rotation className='Rotation'>
                        <Img className='image1' src={secure} alt='NFT1'/> 
                    </Rotation>
                <div style={{width:'100%',height:'100%',zIndex:9}}>
                    
                </div>
            </ContainerImage>
            <ContainerTex>
                <div>
                    <h1>Security</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta labore, aliquid ullam voluptates rerum provident eligendi accusamus distinctio dolores expedita dolorem quisquam at itaque! Fugiat voluptas iure impedit iusto illum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta labore, aliquid ullam voluptates rerum provident eligendi accusamus distinctio dolores expedita dolorem quisquam at itaque! Fugiat voluptas iure impedit iusto illum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo modi iure inventore eius est tempora provident et officia distinctio nisi quod ad ratione, repudiandae autem ab. Eligendi quia ab natus!
                    </p>
                </div>
            </ContainerTex>
        </Div>
    )
}

export default Section_4