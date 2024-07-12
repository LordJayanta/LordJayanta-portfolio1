import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';

const CaseStudie = ({
  title = 'title',
  para = 'para',
  imgSrc = '.\\image\\img\\image 2.png',
  btnTxt = 'btnTxt',
  color = '#FFA217',
  badgeTxt = 'badge',
  badgebg = '#FFF6E9',
  pcRevarce = false
}) => {
  const Wrapper = styled.div`
    width: 100%;
    margin: 3em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    ${pcRevarce && 'flex-direction: row-reverse;'}
    @media (max-width: ${({theme}) => theme.media.mobile}) {
      flex-direction: column-reverse;
    }


    .case-details{
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      @media (max-width: ${({theme}) => theme.media.mobile}) {
        width: 95%;
        align-items: center;
      }
    }
    figure{
      border-radius: 6px;
      overflow: hidden;
      width: 50%;
      img{
        width: 100%;
      }
      @media (max-width: ${({theme}) => theme.media.mobile}) {
        width: 95%;
        margin: 0 10px;
      }
    }
    .case-badge{
      color: ${color};
      background-color: ${badgebg};
      /* background-color: #ffa2171e; */
      font-weight: bold;
      font-size: 12px;
      padding: 5px 10px;
      width: fit-content;
      border-radius: 50px;
    }
    .case-action{
      background-color: ${color};
      margin-top: 1.8em;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
      h3{
          font-size: 18px;
      }
    }
  `;
  return (
    <Wrapper>
      <div className='case-details'>
        <div className='case-badge'>{badgeTxt}</div>
        <h3>{title}</h3>
        <p>{para}</p>
        <Button className='case-action'>{btnTxt}</Button>
      </div>
      <figure>
        <img src={imgSrc} alt="" />
      </figure>
    </Wrapper>
  )
}
export default CaseStudie
