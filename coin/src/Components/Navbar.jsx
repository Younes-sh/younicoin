import React from 'react'
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba( 73, 25, 114, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3.5px );
-webkit-backdrop-filter: blur( 3.5px );
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
                  <Link style={{color:'white',textDecoration:'none'}} to="/exchanges">Exchanges</Link>
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