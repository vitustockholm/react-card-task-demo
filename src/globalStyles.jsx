import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
margin: 0;
padding: 0;
}

html {
font-family: 'Poppins', sans-serif;
}

:root {
    --primary-color: #f2877d;
    --button-hover: #e0675c;
}
`;
