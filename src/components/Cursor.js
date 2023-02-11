// import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';

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
        <>
            <div ref={cursorRef} id="cursor"></div>
            <div ref={auraRef} id="aura"></div>
        </>
    )
}

export default Cursor;