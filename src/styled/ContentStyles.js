import styled from "styled-components";

export const ContentStyles = styled.div`
    
    .main-article {
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        position: relative;
        text-align: center;
    }

    .main-article__title {
        text-transform: uppercase;
        font-size: calc(var(--index) * 1.8);
        letter-spacing: calc(var(--index) / 5.5);
        transform: translate3d(0, calc(var(--scrollTop) / -10), 0);
        will-change: transform;
    }

    .main-article__text {
        transform: translate3d(0, calc(var(--scrollTop) / -12), 0);
        max-width: calc(var(--index) * 30);
        font-size: calc(var(--index) * .9);
        margin-top: calc(var(--index) * .7);
        will-change: transform;
    }

    .main-article__copyright {
        position: absolute;
        bottom: calc(var(--index) * 1.5);
        opacity: .55;
        font-size: calc(var(--index) * .75);
    }
`