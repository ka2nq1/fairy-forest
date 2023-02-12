// import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import { CursorStyles } from '../styled/CursorStyles';

const Cursor = () => {

    const cursorRef = useRef();
    const auraRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            cursorRef.current.classList.remove('hidden');
            auraRef.current.classList.remove('hidden');
        })
        document.addEventListener('mouseout', () => {
            cursorRef.current.classList.add('hidden');
            auraRef.current.classList.add('hidden');
        })
    }, [])

    return (
        <CursorStyles>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={auraRef} className="aura"></div>
        </CursorStyles>
    )
}

export default Cursor;