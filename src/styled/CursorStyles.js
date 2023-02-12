import styled from "styled-components";

export const CursorStyles = styled.div`
    .cursor, .aura {
        position: absolute;
        border-radius: 100%;
        transition: .5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
        user-select: none;
        pointer-events: none;
        z-index: 10000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .cursor.hidden, .aura.hidden {
      transform: translate(-50%, -50%) scale(.00001)!important;
    }

    .cursor.enlarged {
      transform: translate(-50%, -50%) scale(0);
    }
    .aura.enlarged {
      transform: translate(-50%, -50%) scale(1.5);
    }

    .cursor {
      width: 8px;
      height: 8px;
      /* background-color: rgb(117, 111, 111); */
      backdrop-filter: invert(100%);
    }

    .cursor.active {
      transform: scale(0);
    }

    .aura {
      width: 46px;
      height: 46px;
      border: 1px solid rgba(117, 111, 111, 0.521);
      background-color: rgba(117, 111, 111, 0.123); 
      backdrop-filter: hue-rotate(160deg);
    }

    .aura.active {
      transform: scale(2);
      background-color: rgb(117, 111, 111);
      z-index: 0;
      border: 1.2px solid rgba(117, 111, 111, 0.616);
    }
`