import React from 'react'
import styled from 'styled-components'
import Container from '../../styles/Container';
import SectionHeader from '../SectionHeader';
import { ButtonBig } from '../../styles/Button';

const ContactSection = () => {
  return (
    <Wrapper id='ContactSection'>
      <Container>
        <SectionHeader
          title={'Get In Touch'} titleColor='white'
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        />
        <form action="">
          <div>
            <label htmlFor="contact-email">Email</label>
            <input type="text" id='contact-email' placeholder='Please enter your email' />
          </div>
          <div>
            <label htmlFor="contact-mobile">Mobile</label>
            <input type="text" id='contact-mobile' placeholder='Enter your mobile' />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea name="" id="contact-mobile" placeholder='Enter your message'></textarea>
          </div>
          <div>
            <ButtonBig className='contact-submit'>Submit</ButtonBig>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #080808;

  form{
    width: 350px;
    margin: auto;
    color: #fff;
    font-size: 14px;
    margin-top: 3em;
    overflow: hidden;
    @media (max-width: ${({theme}) => theme.media.mobile}) {
      width: 90%;
    }
  }
  form > div{
    margin: 1em 0;
  }
  textarea {
    height: 120px;
  }
  input,textarea{
    margin-top: 3px;
    width: 100%;
    padding: 1em;
    border-radius: 4px;
    border: none;
  }
  .contact-submit{
    width: 100%;
    padding: 16px 24px;
  }
`;

export default ContactSection
