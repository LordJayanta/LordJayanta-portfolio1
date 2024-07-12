import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      &copy;LordJayanta
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: #1B1B1B;
    color: #9C9C9C;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Footer
