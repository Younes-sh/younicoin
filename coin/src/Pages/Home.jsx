import React from 'react';
import styled from '@emotion/styled';
import  './Home.css'
import Image from '../asset/mobile2.png'
const Div = styled.div`
    width:100%;
    height:auto;
    color:white;
    padding-top:60px;
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
    z-index:9;
    justify-content:center;
`;
const Element2 = styled.div`
    width:100%;
    height:700px;
    display:flex
`
const El = styled.div`
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    font-size:20px;
`;
const Img = styled.img`
    width:500px;
    padding-top:100px;
    animation: upDown 3s infinite  alternate ;
    @keyframes upDown {
        from {margin-top: 0;};
        to {margin-top: 25px ; };
    }
`;
const Home = () => {
    return (
        <Div>
           
            <Element1>
                <El>
                    <h1>Jump start <br />your crypto <br/>portfolio</h1>
                    <p>Coinbase is the easiest place to buy and sell cryptocurrency. <br /> Sign up and get started today.
</p>
                </El>
                <El>
                    <Img className='imageMobile' src={Image} />
                </El>
            </Element1>
            <Element2>
                <div className='container'>
                    <div className='div1' style={{width:500,height:500 , backgroundColor:'yellow',borderRadius:'50%'}}>1</div>
                    <div className='div2' style={{width:400,height:400 , backgroundColor:'red',borderRadius:'50%'}}>2</div>
                    <div className='div3' style={{width:160,height:160 , backgroundColor:'blue',borderRadius:'50%'}}>3</div>
                    <div className='div4' style={{width:290,height:290 , backgroundColor:'white',borderRadius:'50%'}}>4</div>
                </div>
            </Element2>
        </Div>
    )
}

export default Home ;