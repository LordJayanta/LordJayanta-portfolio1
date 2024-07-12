import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
a{
    text-decoration: none;
    color: black;
}

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background-color: #080808;
}
::-webkit-scrollbar-thumb{
    background-color: #62BA1B;
    border-radius: 50px;
}

h2,h3,h4{
    font-family: "Raleway", sans-serif;
    font-weight: 900;
}
h2{
    font-size: 32px;
}
h3{
    font-size: 24px;
}
h4{
    font-size: 18px;
}
p{
    font-size: 14px; 
    color: #9C9C9C;
}
button{
    border: none;
    outline: none;
}
.card-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 2em;
    margin-top: 3em;
    margin-bottom: 2em;
}


`;