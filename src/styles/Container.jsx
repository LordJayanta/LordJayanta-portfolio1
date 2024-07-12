import styled from 'styled-components'

const Container = styled.div`
    padding: 3.5em;
    width: 70%;
    margin: auto;
    overflow: hidden;
    @media (max-width: ${({theme}) => theme.media.tab}) {
        width: 90%;
    }
    @media (max-width: ${({theme}) => theme.media.mobile}) {
        width: 95%;
        padding: 2em 0px;
    }
`;


export default Container;