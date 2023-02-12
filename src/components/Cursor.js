import React, { useEffect, useRef } from 'react';
import { CursorStyles } from '../styled/CursorStyles';

const Cursor = () => {

    const delay = 6;

    const cursorRef = useRef();
    const auraRef = useRef();

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);

    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);


    const toogleVisibility = () => {
        if(cursorVisible.current) {
            cursorRef.current.classList.remove('hidden');
            auraRef.current.classList.remove('hidden');
        } else {
            cursorRef.current.classList.add('hidden');
            auraRef.current.classList.add('hidden');
        }
    }

    const toogleSize = () => {
        if(cursorEnlarged.current) {
            cursorRef.current.classList.add('enlarged');
            auraRef.current.classList.add('enlarged');
        } else {
            cursorRef.current.classList.remove('enlarged');
            auraRef.current.classList.remove('enlarged');
        }
    }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toogleSize();
    }
    
    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toogleSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toogleVisibility();
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toogleVisibility();
    }

    const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toogleVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        cursorRef.current.style.left = endX.current + 'px';
        cursorRef.current.style.top = endY.current + 'px';
    }

    const animateAura = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        auraRef.current.style.left = _x.current + 'px';
        auraRef.current.style.top = _y.current + 'px';

        requestRef.current = requestAnimationFrame(animateAura);
    }


    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
        window.addEventListener('scroll', mouseLeaveEvent);

        animateAura();

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);
            window.removeEventListener('scroll', mouseLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        }
    })

    return (
        <CursorStyles>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={auraRef} className="aura"></div>
        </CursorStyles>
    )
}

export default Cursor;