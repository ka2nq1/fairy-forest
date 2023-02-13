import styled from "styled-components";

export const HeaderStyles = styled.div`
    
    .main-header {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            z-index: 10;
            width: 100%;
            height: calc(var(--index) * 10);
            background-image: url('${window.location.href}/img/ground.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            bottom: calc(var(--index) * -4.5);
        }
    }

    .main-header__layers {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        position: relative;
    }

    .main-header__layer {
        height: 100%;
        width: 100%;
        position: absolute;
        background-size: cover;
        background-position: center;
        will-change: transform;
    }

    .main-header__content {
        z-index: 1;
        text-transform: uppercase;
        font-weight: 900;
        transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
        will-change: transform;
        color: var(--text);
        text-shadow: 0 0 15px #9e7d35;
    }

    .main-header__caption  {
        font-size: calc(var(--index) / 1.175);
        letter-spacing: calc(var(--index) / 3.5);
        margin-top: calc(var(--index) * -1.75);
    }

    .main-header__title {
        font-size: calc(var(--index) * 2.5);
        letter-spacing: calc(var(--index) / 2.25);
    }

    .main-header__base {
        transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
    }

    .main-header__middle {
        z-index: 2;
        transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
    }

    .main-header__front {
        z-index: 3;
        transform: translate3d(0, calc(var(--scrollTop) / 5.7), 0);
    }

    /* $quantity: 15 */
    
    /* .firefly {
        position: fixed;
        left: 50%;
        top: 50%;
        width: 0.4vw;
        height: 0.4vw;
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
    } */
    
  
  

  
// Randomize Fireflies Motion
/* @for $i from 1 through $quantity
  
  $steps: random(12) + 16
  $rotationSpeed: random(10) + 8s
  
  .firefly:nth-child(#{$i}) 
    animation-name: move#{$i}

    &::before
      animation-duration: #{$rotationSpeed}

    &::after
      animation-duration: #{$rotationSpeed}, random(6000) + 5000ms
      animation-delay: 0ms, random(8000) + 500ms

  @keyframes move#{$i}
    @for $step from 0 through $steps
      #{$step * (100 / $steps)}%
        transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(random(75) / 100 + .25)

@keyframes drift
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

@keyframes flash
  0%, 30%, 100%
    opacity: 0
    box-shadow: 0 0 0vw 0vw yellow
  5%
    opacity: 1
    box-shadow: 0 0 2vw 0.4vw yellow */
`