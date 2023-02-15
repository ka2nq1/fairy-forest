import styled from "styled-components";

export const FirefliesStyles = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0.4vw;
    height: 0.4vw;
    margin: -0.2vw 0 0 9.8vw;
    animation: ease 200s alternate infinite;
    animation-name: move${props => props.index};
    pointer-events: none;
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 10;
        transform-origin: -10vw;
    }
    &::before {
      background: black;
      opacity: 0.4;
      animation: drift ease alternate infinite;
      animation-duration: ${props => props.rotationSpeed}s;
    }
    &::after {
      background: white;
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
      animation: drift ease alternate infinite, flash ease infinite;
      animation-duration: ${props => props.rotationSpeed}s, ${Math.random() * (6000 - 5000) + 5000}ms;
      animation-delay: 0ms, ${Math.random() * (6000 - 500) + 500}ms;
    }

    @keyframes move${props => props.index} {
        ${props => props.steps * (100 / props.steps) + '%'} {
            transform: translateX(${Math.random() * (100 - 50) + 50}wv) translateY(${Math.random() * (100 - 50) + 50}vh) scale(${Math.random() * 75 - (100 / .25) + (100 / .25)});
        }
    }
    @keyframes ${props => 'move' + props.index} {
        ${props => props.steps * (100 / props.steps) + '%'} {
            transform: translateX(${Math.floor(Math.random() * (100 - -100 + 1) + -100) + 'vw'}) translateY(${Math.floor(Math.random() * (100 - -100 + 1) + -100) + 'vh'}) scale();
        }
    }

    @keyframes drift {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes flash {
        0%, 30%, 100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
        }
        5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw yellow;
        }
    }
`