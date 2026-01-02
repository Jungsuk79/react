import { keyframes } from "styled-components";  


export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }   
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const switchOn = keyframes`
    0% {
        transform: translateX(0);
    }   
    100% {
        transform: translateX(100%);
    }
`;