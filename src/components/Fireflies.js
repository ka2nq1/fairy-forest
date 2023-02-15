import React from 'react';
import { FirefliesStyles } from '../styled/FirefliesStyles';

const Fireflies = () => {

    return (
        <>
            {[...Array(15)].map((e, index) => {
                const randomHeight = Math.floor(Math.random() * window.innerHeight);
                const randomWidth = Math.floor(Math.random() * window.innerWidth);
                const rotationSpeed = Math.random() * (10 - 8) + 8;
                const steps = Math.random() * (16 - 12) + 12;
                return (
                    <FirefliesStyles  
                        key={index}
                        {...{randomHeight, randomWidth, rotationSpeed, steps, index}}
                        index={index} 
                    />
                )
            })}
        </>
    )
}

export default Fireflies;