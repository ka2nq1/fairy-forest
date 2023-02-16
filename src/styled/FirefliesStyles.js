import styled, {css} from "styled-components";

const createCSS = (index) => {
    const steps = Math.floor(Math.random() * (index + 5 - index) + index);
    let styles = '';
    
    for (let step = 0; step < steps; step += 1) {
        styles += `
            ${(step * 100 / steps) + '%'} {
                transform: ${`translateX(${Math.random() * (50 - -40 + index) + -50}vw) translateY(${Math.random() * (50 - -40 + index) + -50}vh)`};
            }
        `
    }
  
    return css`${styles}`;
}

export const FirefliesStyles = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0.4vw;
    height: 0.4vw;
    transform: ${props => `translateX(-50% + ${props.index}) translateY(-50% + ${props.index})`};
    margin: -0.2vw 0 0 9.8vw;
    animation: ease 200s alternate infinite;
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
    }
    &::after {
      background: white;
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
      animation: drift ease alternate infinite, flash ease infinite;
    }
    &:nth-child(${props => props.index}) {
        animation-name: move${props => props.index};
        &:before {
            animation-duration: ${props => props.rotationSpeed}s;
        }
        &:after {
            animation-duration: ${props => props.rotationSpeed}s;
            animation-delay: ${Math.random() * (6000 - 500) + 500}ms;
        }
        @keyframes move${props => props.index} {
            ${props => createCSS(props.index)}
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
    }
`