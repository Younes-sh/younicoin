import React from 'react'
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2d2a36;
  z-index:99;
`;
const ContainerMenu = styled.div`
  width: 75%;
  display: flex;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: start;
  padding: 10px;
  gap: 50px;
`;
const Li = styled.li`
  list-style-type: none;
`;

const Navbar = () => {
  return (
      <div className='Navbar'>
        <Nav>
          <ContainerMenu>
            <Ul>
              <Li>
                  <Link style={{color:'white',textDecoration:'none'}} to="/">Home</Link>
                </Li>
                <Li>
                  <Link style={{color:'white',textDecoration:'none'}} to="/market">Market</Link>
                </Li>
              
                <Li>
                  <Link style={{color:'white',textDecoration:'none'}} to="/contact">Contact</Link>
                </Li>

                <Li>
                  <Link style={{color:'white',textDecoration:'none'}} to="/nft">NFT</Link>
                </Li>
            </Ul>
          </ContainerMenu>
        </Nav>
      </div>
  )
}

export default Navbar