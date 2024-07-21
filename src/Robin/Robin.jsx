import React, { useState, useRef } from 'react';
import { useLocation } from 'wouter';
import robinPfp from '../assets/robin.png';
import tapButton from '../assets/tapButton.png';
import SignatureCanvas from 'react-signature-canvas';
import './Robin.css';

function Robin() {
    const [showButton, setShowButton] = useState(false);
    const [message, setMessage] = useState("Write the numbers!");
    const [location, setLocation] = useLocation();
    const sigCanvas1 = useRef({});
    const sigCanvas2 = useRef({});
    const sigCanvas3 = useRef({});

    const handleDrawEnd = () => {
        const isComplete1 = !sigCanvas1.current.isEmpty();
        const isComplete2 = !sigCanvas2.current.isEmpty();
        const isComplete3 = !sigCanvas3.current.isEmpty();

        if (isComplete1 && isComplete2 && isComplete3) {
            setShowButton(true);
            setMessage("Great job!");
        }
    };

    const handleButtonClick = () => {
        setLocation('/choose');
    };

    return (
        <div>
            <div className='robinSpeechBox'>
                <div className='robinSpeech'>
                    {message}
                </div>
            </div>

            <div className='rectangles'>
                <div className="rectangle1"></div>
                <div className="rectangle2"></div>
            </div>

            <img src={robinPfp} className="robinPfp" alt="Robin"/>
            <div className="circle1">
                <SignatureCanvas
                    ref={sigCanvas1}
                    penColor='#EF9636'
                    canvasProps={{width: 485, height: 571, className: 'drawingCanvas'}}
                    onEnd={handleDrawEnd}
                    minWidth={15}
                    maxWidth={15}
                />
                <div className="number1">1</div>
            </div>
            <div className="circle2">
                <SignatureCanvas
                    ref={sigCanvas2}
                    penColor='#EF9636'
                    canvasProps={{width: 485, height: 571, className: 'drawingCanvas'}}
                    onEnd={handleDrawEnd}
                    minWidth={15}
                    maxWidth={15}
                />
                <div className="number2">2</div>
            </div>
            <div className="circle3">
                <SignatureCanvas
                    ref={sigCanvas3}
                    penColor='#EF9636'
                    canvasProps={{width: 485, height: 571, className: 'drawingCanvas'}}
                    onEnd={handleDrawEnd}
                    minWidth={15}
                    maxWidth={15}
                />
                <div className="number3">3</div>
            </div>
            {showButton && (
                <>
                    <div className="darkOverlay"></div>
                    <img src={tapButton} className="tapButton" onClick={handleButtonClick}/>
                    //make the screen darker
                </>
            )
            }

        </div>
    );
}

export default Robin;
