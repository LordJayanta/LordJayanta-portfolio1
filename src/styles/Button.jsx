import styled from 'styled-components'


const ButtonBig = styled.button`
    background-color: #62BA1B;
    padding: 21px 64px;
    border-radius: 4px;
    width: fit-content;
    font-size: 16px;
    font-weight: bold;
    color: white;
    transition: all ease 0.2s;
    &:hover{
        opacity: 0.7;
    }
`;
const Button = styled.button`
    background-color: #000AFF;
    padding: 10px 24px;
    border-radius: 4px;
    width: fit-content;
    font-size: 14px;
    font-weight: bold;
    color: white;
    transition: all ease 0.2s;
    &:hover{
        opacity: 0.7;
    }
`;


export {Button, ButtonBig}
