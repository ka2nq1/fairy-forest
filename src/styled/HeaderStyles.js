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
            background-image: url("img/ground.png");
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
        background-image: url("img/layer-base.png");
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
`