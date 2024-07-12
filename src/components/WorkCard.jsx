import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';

const WorkCard = ({
    cover = '.\\image\\img\\image 8.png',
    title = 'Work name here',
    para = 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
    btnTxt = 'Know more'
}) => {
    return (
        <Wrapper>
            <figure>
                <img src={cover} alt="" />
            </figure>
            <h4>{title}</h4>
            <p>{para}</p>
            <Button>{btnTxt}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;

    Button{
        background-color: #62BA1B;
    }
    
    figure{
      border-radius: 6px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
`;

export default WorkCard
