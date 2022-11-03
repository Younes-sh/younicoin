import React,{useRef} from 'react';
import styled from '@emotion/styled';
import landescapMobile from '../../asset/mobile3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Div = styled.div`
    width:75%;
    height:700px;
    display:flex;
    justify-content:space-between;
    /* background-color: aqua; */
   
    div {
        width:90%;
        display:flex;
        align-items:center;
    }
   
    @media screen and (max-width:1400px){
        flex-direction: column;
    }
`;
const Element1 = styled.div`
    display: flex;
    justify-content: start;
    @media screen and (max-width:1400px){
        justify-content: center;
        margin-top: 20px;
    }
`;
const Element2 = styled.div`
  display :flex ;
  justify-content: end;
  @media screen and (max-width:1400px){
        justify-content: center;
}

`;
const Img = styled.img`
    width:90%;
`;




const Section_2 = () => {
// -------------------------------------------
    const handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          // do something at end of scroll
        }
      }
// -------------------------------------------
    return (
        <Div>
                <Element1>
                    <Img src={landescapMobile} alt='Trading'/>
                </Element1>
                <Element2>
                    <div style={{display:'flex',flexDirection:'column' , justifyContent:'space-around'}} className="content-container" onScroll={handleScroll}>
                        <h1>Buy, trade, and hold 350+ cryptocurrencies on Younicoin</h1>
                        <p>Trade some of the world’s largest and most popular companies, including Amazon, Netflix, Tesla and many more.  </p>
                        <p>Maximise your trading opportunities with CFD shares and benefit from the price movements with a lower investment. MultiBank Group offers more than 20,000 shares tochoose from the largest multinational companies, with margin requirements as low as 5%. </p>
                        <p>All at Younicoin</p>
                    </div>
                </Element2>
        </Div>
    )
}

export default Section_2