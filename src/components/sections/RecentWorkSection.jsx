import React from 'react'
import Container from '../../styles/Container'
import SectionHeader from '../SectionHeader'
import WorkCard from '../WorkCard'
import styled from 'styled-components'

const RecentWorkSection = () => {
    return (
        <Wrapper>
            <Container>
                <SectionHeader
                    title={'Recent Work'}
                    para={'Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <div className="card-container">
                    <WorkCard
                        cover='.\image\img\image 8.png'
                        title='Work name here'
                        para='Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'
                        btnTxt='Know more'
                    />
                    <WorkCard
                        cover='.\image\img\image 9.png'
                        title='Work name here'
                        para='Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'
                        btnTxt='Know more'
                    />
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.card-container{
    @media (max-width: ${({theme}) => theme.media.mobile}) {
        grid-template-columns: 1fr;
    }
}
`;

export default RecentWorkSection
