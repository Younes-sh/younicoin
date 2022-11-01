import React from 'react';
import styled from '@emotion/styled';
import  './Home.css'
import Image from '../asset/mobile2.png'
const ContainerHome = styled.div`
    width:100%;
    height:auto;
    color:white;
    position:relative;
`;
const Element1 = styled.div`
    width:100%;
    height:700px;
    display:flex;
    position:absolute;
    backdrop-filter: blur(30px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: rgba(17, 25, 40, 0.68);
    z-index:8;
    justify-content:center;
`;
const Element2 = styled.div`
    width:100%;
    height:700px;
    display:flex
`
const El1 = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    font-size:20px;
`;
const El2 = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    font-size:20px;
    @media screen and (max-width:1000px) {
        display:none;
    }
`;
const Img = styled.img`
    width:500px;
    padding-top:100px;
    animation: upDown 2s infinite  alternate ;
    @keyframes upDown {
        from {margin-top: 0;};
        to {margin-top: 25px ; };
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;

    div {
        text-align: center;
        text-shadow: 0 0 5px black;
        font-size: 35px;
        position: absolute;
        border-radius:50%
    }
`;
const Home = () => {
    return (
        <div style={{paddingTop:'70px'}} >
            <ContainerHome>
            
                <Element1>
                    <El1>
                        <h1>Jump start <br />your crypto <br/>portfolio</h1>
                        <p>Younicoin is the easiest place to buy and sell cryptocurrency. <br /> Sign up and get started today.
                        </p>
                    </El1>
                    <El2 className='ContainerImage'>
                        <Img className='imageMobile' src={Image} />
                    </El2>
                </Element1>
                <Element2>
                    <Container className='container'>
                        <div className='div1' style={{width:380,height:380 , backgroundColor:'yellow'}}>1</div>
                        <div className='div2' style={{width:380,height:380 , backgroundColor:'red'}}>2</div>
                        <div className='div3' style={{width:160,height:160 , backgroundColor:'blue'}}>3</div>
                        <div className='div4' style={{width:290,height:290 , backgroundColor:'white'}}>4</div>
                    </Container>
                </Element2>
            </ContainerHome>
        </div>
    )
}

export default Home ;