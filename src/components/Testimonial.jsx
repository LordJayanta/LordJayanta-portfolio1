import React from 'react'
import styled from 'styled-components'

const Testimonial = ({
    para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    clientImg = '.\\image\\people\\image 4.png',
    clientName = 'Client Name'
}) => {
    return (
        <Wrapper className='Testimonial'>
            <div className='card'>
                <figure className='quote'>
                    <img src=".\image\icon\quote.svg" alt="" />
                </figure>
                <div className='card-details'>
                    <p>{para}</p>
                    <div>
                        <figure>
                            <img src={clientImg} alt="" />
                        </figure>
                        <h4>{clientName}</h4>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    border-radius: 6px;
    padding: 1px;
    background-image: linear-gradient(to right, #484848 0%, #080808 80%);

    .card{
        color: #9C9C9C;
        padding: 2em;
        border-radius: 6px;
        background: #080808;
        position: relative;
        &:hover{
            background-image: linear-gradient(to right, #484848 0%, #080808 80%);
        }
        .quote{
            position: absolute;
            top: -12px;
        }
    }
    .card-details > div{
        display: flex;
        align-items: center;
        gap: 1em;
    }
    .card-details p{
        margin-bottom: 1.5em;
        @media (max-width: ${({theme}) => theme.media.mobile}) {
            font-size: 12px;
        }
    }
    .card-details figure{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    
`;

export default Testimonial
