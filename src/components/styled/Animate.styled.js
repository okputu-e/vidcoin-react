import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const UpAndDown = keyframes`

    0% { 
        transform: translateY(0); 
    }

    100% { 
        transform: translateY(-10px); 
    }

`;

export const Pulse = keyframes`
    0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
`;
