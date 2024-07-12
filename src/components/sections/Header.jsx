import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar';

const Header = () => {
  return (
    <Wrapper>
      <Navbar/>
    </Wrapper>
  )
}

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`;

export default Header
