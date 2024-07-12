import React from 'react'
import CaseStudie from '../CaseStudie'
import SectionHeader from '../SectionHeader'
import Container from '../../styles/Container'

const CaseStudiesSection = () => {
    return (
        <div id='CaseStudiesSection'>
            <Container>
                <SectionHeader
                    title='Case Studies'
                    para={'Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                />
                <CaseStudie
                    title='Work name here'
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'}
                    btnTxt='View case study'
                    color='#FFA217'
                    badgeTxt='Fintech'
                    badgebg='#FFF6E9'
                    imgSrc='.\\image\\img\\image 2.png'
                />
                <CaseStudie
                    title='Work name here'
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'}
                    btnTxt='View case study'
                    color='#000AFF'
                    badgeTxt='EdTech'
                    badgebg='#D0E6FF'
                    pcRevarce='true'
                    imgSrc='.\\image\\img\\image 1.png'
                />
                <CaseStudie
                    title='Work name here'
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.'}
                    btnTxt='View case study'
                    color='#2AB090'
                    badgeTxt='Pharma'
                    badgebg='#E0FFF8'
                    imgSrc='.\\image\\img\\image 3.png'
                />
            </Container>
        </div>
    )
}


export default CaseStudiesSection
