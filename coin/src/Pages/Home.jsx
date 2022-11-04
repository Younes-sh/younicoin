import React from 'react';
import styled from '@emotion/styled';
import Search from '../Components/Search/Search';
import  './Home.css';
import Section_1 from '../Components/ElementHomePage/Section_1';
import Section_2 from '../Components/ElementHomePage/Section_2';
import Section_3 from '../Components/ElementHomePage/Section_3';
import Section_4 from '../Components/ElementHomePage/Section_4';

// import Test from '../Components/ElementHomePage/Test';

import Image from '../asset/mobile2.png';

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
    display:flex;
    
`
const El1 = styled.div`
    width:35%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
   
    h1 {
        font-size:55px;
    }
    @media (max-width:888px) {
        width:80%;
        align-items:center;
        h1 {
            font-size:35px;
        }
    }
    p {
        font-size: 24px;
    }
`;
const El2 = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:20px;
    @media screen and (max-width:1118px) {
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
        border-radius:50%;
    }
    @media screen and (max-width:1118px) {
        div {
            display:none;
        }
    }
   

`;
const ContainerSections = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Home = () => {
    return (
        <div  >
            <ContainerHome>
            
                <Element1>
                    <El1>
                        <h1>Jump start your crypto portfolio</h1>
                        <p>Younicoin is the easiest place to buy and sell cryptocurrency. <br /> Sign up and get started today.
                        </p>
                        <Search />
                    </El1>
                    <El2 className='ContainerImage'>
                        <Img className='imageMobile' src={Image} />
                    </El2>
                </Element1>
                <Element2>
                    <Container className='container'>
                        <div className='div1' style={{width:380,height:380 , backgroundColor:'yellow'}}></div>
                        <div className='div2' style={{width:380,height:380 , backgroundColor:'red'}}></div>
                        <div className='div3' style={{width:160,height:160 , backgroundColor:'blue'}}></div>
                        <div className='div4' style={{width:290,height:290 , backgroundColor:'white'}}></div>
                    </Container>
                </Element2>
                <ContainerSections>
                    {/* <Test /> */}
                    <Section_1 />
                    <Section_2 />
                    <Section_3 />
                    <Section_4 />
                </ContainerSections>
            </ContainerHome>
        </div>
    )
}

export default Home ;