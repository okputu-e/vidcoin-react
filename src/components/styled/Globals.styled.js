import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

   

    html{
        font-size: 100%;
    }

    body{
        font-family:  sans-serif;
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
    }

    a{
        text-decoration: none;
    }

    img{
        max-width: 100%;
    }
`;
