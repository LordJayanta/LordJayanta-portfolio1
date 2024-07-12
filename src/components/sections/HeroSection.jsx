import React from 'react'
import styled from 'styled-components'
import Clientslog from '../Clientslog';
import {ButtonBig} from '../../styles/Button';


const HeroSection = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className="hero-text">
          <h2 className='hero-heading'>Lord Jayanta</h2>
          <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <ButtonBig className='hero-btn'>Let’s get started</ButtonBig>
        </div>
        <div className="hero-avater">
          {/* <img src=".\image\image 11.png" alt="" /> */}
          <img width='100%' src=".\image\20240513-profile.jpg" alt="" />
        </div>
      </div>
      <Clientslog/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #080808;
  color: #9C9C9C;
  margin: auto;
  padding-top: 70px;
  width: calc(100vw-10px);
  /* height: 100vh; */
  min-height: 100vh;
  overflow: hidden;
  @media (min-width: ${({theme}) => theme.media.tab}) {
    height: 100vh;
  }
  @media (max-width: ${({theme}) => theme.media.tab}) {
  padding-top: 90px;
  }
  

  .container{
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: ${({theme}) => theme.media.tab}) {
      width: 90%;
      flex-direction: column-reverse;
    }
  }
  .hero-text{
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 2em;
    @media (max-width: ${({theme}) => theme.media.tab}) {
      align-items: center;
      padding: 0 10px;
    }
  }
  .hero-heading{
    font-size: 44px;
  }
  p{
    font-size: 16px;
  }
  .hero-avater{
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) { 
      .container{
        height: 100%;
      }
      .hero-avater{
        width: 300px;
        height: 300px;
        margin-bottom: 1em;
      }
      .hero-heading{
        font-size: 32px;
      }
      p{
          font-size: 12px;
      }
      .hero-btn{
        width: 100%;
        padding: 14px 60px;
        font-size: 14px;
      }
  }
`;

export default HeroSection
