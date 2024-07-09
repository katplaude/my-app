import React, { useState, useRef } from 'react';
import jukiPfp from '../assets/juki.png';
import Draggable from 'react-draggable';
import './Juki.css';

function Juki() {
    const [message, setMessage] = useState("Show me what will happen if you mix those colors!");
    const whiteCircleRef = useRef(null);
    const yellowCircleRef = useRef(null);
    const redCircleRef = useRef(null);

    const checkOverlap = () => {
        const whiteCircle = whiteCircleRef.current.getBoundingClientRect();
        const yellowCircle = yellowCircleRef.current.getBoundingClientRect();
        const redCircle = redCircleRef.current.getBoundingClientRect();

        const isWithinWhiteCircle = (circle) => {
            return (
                circle.left >= whiteCircle.left &&
                circle.right <= whiteCircle.right &&
                circle.top >= whiteCircle.top &&
                circle.bottom <= whiteCircle.bottom
            );
        };

        const isOverlapping = (circle1, circle2) => {
            return !(
                circle1.right < circle2.left ||
                circle1.left > circle2.right ||
                circle1.bottom < circle2.top ||
                circle1.top > circle2.bottom
            );
        };

        if (
            isWithinWhiteCircle(yellowCircle) &&
            isWithinWhiteCircle(redCircle) &&
            isOverlapping(yellowCircle, redCircle)
        ) {
            setMessage("Yay!");
        } else {
            setMessage("Show me what will happen if you mix those colors!");
        }
    };

    return (
        <div>
            <img className='jukiPfp' src={jukiPfp} alt="Juki"/>

            <div className='jukiSpeechBox'>
                <div className={"jukiSpeech1"}>
                    {message}
                </div>
            </div>

            <Draggable onStop={checkOverlap}>
                <div className="yellowCircle" ref={yellowCircleRef}></div>
            </Draggable>

            <Draggable onStop={checkOverlap}>
                <div className="redCircle" ref={redCircleRef}></div>
            </Draggable>

            <div className="whiteCircle" ref={whiteCircleRef}></div>

            <div className="board"></div>
        </div>
    );
}

export default Juki;
