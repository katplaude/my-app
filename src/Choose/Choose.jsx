import React from 'react';
import juki from '../assets/juki.png';
import robin from '../assets/robin.png';
import niki from '../assets/niki.png';
import mikaPfp from '../assets/mikaPfp.png';
import forParents from '../assets/forParents.png';
import { useLocation } from "wouter";
import './Choose.css';

function Choose() {
    const [, setLocation] = useLocation();

    const handleJukiClick = () => {
        setLocation('/juki');
    };

    return (
        <div>
            <div>
                <img className='mikaPfp' src={mikaPfp} alt="Mika Profile"/>
                <img className='juki' src={juki} alt="Juki" onClick={handleJukiClick}/>
                <img className='robin' src={robin} alt="Robin"/>
                <img className='niki' src={niki} alt="Niki"/>
                <img className='forParents' src={forParents} alt="forParents"/>
            </div>

            <div className='rectangles'>
                <div className="rectangle1"></div>
                <div className="rectangle2"></div>
            </div>

            <div className='mikaSpeechBox'>
                <div className={"mikaSpeech"}>
                    Those are some of my Edurino friends: Juki, Robin and Niki. Choose one and play!
                </div>
            </div>

            <div className='juki-text'>Juki</div>
            <div className='robin-text'>Robin</div>
            <div className='niki-text'>Niki</div>
        </div>
    );
}

export default Choose;
