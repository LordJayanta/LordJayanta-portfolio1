import React from 'react'
import styled from 'styled-components'

const Clientslog = () => {
  return (
    <Wrapper>
      <figure>
        <img src=".\image\company\clickup logo 1.png" alt="" />
      </figure>
      <figure>
        <img src=".\image\company\dropbox_blue 1.png" alt="" />
      </figure>
      <figure>
        <img src=".\image\company\Group (1).png" alt="" />
      </figure>
      <figure>
        <img src=".\image\company\Elastic logo 1.png" alt="" />
      </figure>
      <figure>
        <img src=".\image\company\Group.png" alt="" />
      </figure>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  figure{
    border: 1px solid #1B1B1B;
    padding: 23px 36px;
    margin: 10px;
    border-radius: 6px;
    img{
      width: 100%;
    }
    &:hover{
      background-color: #1B1B1B;
    }
  }
  @media (max-width: ${({theme}) => theme.media.tab}) {
      width: 95%;
      flex-wrap: wrap;
      figure{
        padding: 14px 20px;
        width: 90px;
      } 
  }
  @media (max-width: ${({theme}) => theme.media.mobile}) {
      width: 100%;
      flex-wrap: wrap;
      figure{
        padding: 12px 16px;
        width: 80px;
      }
  }
`;

export default Clientslog
