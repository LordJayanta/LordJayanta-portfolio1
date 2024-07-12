import React from 'react'
import styled from 'styled-components'

const SectionHeader = ({ title, titleColor = '#080808', para, paraColor = '#9C9C9C' }) => {
    const Wrapper = styled.div`
        text-align: center;
        max-width: 570px;
        margin: auto;
        h2{
            color: ${titleColor};
            margin-bottom: 0.5em;
        }
        p{
            letter-spacing: 1%;
            color: ${paraColor};
        }
        @media (max-width: ${({theme}) => theme.media.mobile}) {
            width: 95%;
            h2{
                font-size: 24px;
            }
            p{
                font-size: 12px; 
                color: #9C9C9C;
            }
        }
    `;

    return (
        <Wrapper>
            <h2>{title}</h2>
            <p>{para}</p>
        </Wrapper>
    )
}

export default SectionHeader
