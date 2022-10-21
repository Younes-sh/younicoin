import React from 'react'
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  width: 100%;
  display: flex;
  background-color: #2d2a36;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  list-style-type: none;
  margin: 15px;
`;

const Navbar = () => {
  return (
      <>
        <Nav>
          <div>
            <Ul>
              <Li>
                <Link to="/">Home</Link>
              </Li>
            
              <Li>
                <Link to="/contact">Contact</Link>
              </Li>

              <Li>
                <Link to="/about">NFT</Link>
              </Li>
            </Ul>
          </div>
        </Nav>
      </>
  )
}

export default Navbar