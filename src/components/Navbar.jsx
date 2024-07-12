import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Recent work</a>
          </li>
          <li>
            <a href="#">Get In Touch</a>
          </li>
          <li>
            <div className='icon-list'>
                <figure>
                  <img src="./image/icon/LinkedIn.svg" alt="" />
                </figure>
                <figure>
                  <img src="./image/icon/Behance.svg" alt="" />
                </figure>
                <figure>
                  <img src="./image/icon/Twitter.svg" alt="" />
                </figure>
            </div>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  )
}
const Wrapper = styled.section``;

const Nav = styled.nav`
  /* background-color: #080808; */
  color: #9C9C9C;
  ul{
    height: 70px;
    width: 85%;
    margin: auto;
    background-color: #1B1B1B;
    border-end-end-radius: 8px;
    border-end-start-radius: 8px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    transition: all ease-in-out 0.5s;
  }
  a{
    color: #9C9C9C;
  }
  .icon-list{
    display: flex;
    gap: 3em;
  }
  @media (max-width: ${({theme}) => theme.media.tab}) {
    ul{
      height: 30px;
      background-color: ${({theme}) => theme.color.green};
      &:hover{
        height: 250px;
        flex-direction: column;
        background-color: ${({theme}) => theme.color.darkgray};
        li{
          display: block;
        }
      }
      li{
        display: none;
      }
    }
  }
`;

export default Navbar
