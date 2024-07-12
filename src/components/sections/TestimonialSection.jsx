import React from 'react'
import Testimonial from '../Testimonial'
import SectionHeader from '../SectionHeader'
import Container from '../../styles/Container'
import styled from 'styled-components'

const TestimonialSection = () => {
    return (
        <Wrapper>
            <Container>
                <SectionHeader
                    title={'Testimonials'} titleColor='white'
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                />
                <div className='card-container'>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: #080808;
    padding: 1em 0;
    .card-container{
        @media (max-width: ${({theme}) => theme.media.mobile}) {
            grid-template-columns: 1fr;
        }
    }
`;

export default TestimonialSection
