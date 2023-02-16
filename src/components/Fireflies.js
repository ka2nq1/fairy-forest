import React from 'react';
import { FirefliesStyles } from '../styled/FirefliesStyles';

const Fireflies = ({quantity}) => {
    
    return (
        [...Array(quantity)].map((e, index) => {
            const rotationSpeed = Math.random() * (12 + index - 8) + 8;
            return (
                <FirefliesStyles key={index} index={index + 1} {...{rotationSpeed}}/>
            )
        })
    )
}

export default Fireflies;