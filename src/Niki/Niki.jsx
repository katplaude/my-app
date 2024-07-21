import React, { useState } from 'react';
import { useLocation } from 'wouter';
import nikiPfp from '../assets/niki.png';
import cat from '../assets/cat.png';
import mouse from '../assets/mouse.png';
import dog from '../assets/dog.png';
import cloud from '../assets/cloud.png';
import tapButton from '../assets/tapButton.png';
import './Niki.css';

function Niki() {
    const [message, setMessage] = useState("Show me the mouse!");
    const [showButton, setShowButton] = useState(false);
    const [location, setLocation] = useLocation();

    const handleAnimalClick = (animal) => {
        if (animal === 'mouse') {
            setMessage("Yay, great job!");
            setShowButton(true);
        } else {
            setMessage("Try again!");
        }
    };

    const handleButtonClick = () => {
        setLocation('/choose');
    };

    return (
        <div>
            <img src={nikiPfp} className="nikiPfp" alt="Niki" />
            <img src={cat} className="cat" alt="cat" onClick={() => handleAnimalClick('cat')} />
            <img src={mouse} className="mouse" alt="mouse" onClick={() => handleAnimalClick('mouse')} />
            <img src={dog} className="dog" alt="dog" onClick={() => handleAnimalClick('dog')} />
            <div className='cloud-container'>
                <img className='cloud' src={cloud} alt='cloud' />
                <img className='cloud1' src={cloud} alt='cloud' />
            </div>
            <div className='nikiSpeechBox'>
                <div className='nikiSpeech1'>
                    {message}
                </div>
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

export default Niki;
