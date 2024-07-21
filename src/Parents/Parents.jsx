import React, { useState } from 'react';
import { useLocation } from 'wouter';
import mikaPfp from '../assets/mikaPfp.png';
import parentsBoard from '../assets/parentsBoard.png';
import submit from "../assets/submit.png";
import edurino from '../assets/edurino.mp4';
import logo1 from '../assets/logo.png';
import playAgain from '../assets/playAgain.png';
import './Parents.css';

function Parents() {
    const [submitted, setSubmitted] = useState(false);
    const [location, setLocation] = useLocation();

    const handleSubmit = () => {
        setSubmitted(true);
    };
    const handleButtonClick = () => {
        setLocation('/first');
    };

    const discountText = "20% DISCOUNT".split('').map((char, index) => (
        <span key={index} className={`char-${index % 3}`}>{char}</span>
    ));

    return (
        <div className="container">
            <video className='backgroundVideo' autoPlay loop muted>
                <source src={edurino} type="video/mp4"/>
            </video>

            <div className="gradientOverlay"></div>

            <img src={mikaPfp} className="mikaPfp" alt="Mika Pfp"/>

            <div className='speechBox2'>
                <div className='speech2'>
                    EDURINO is a game and learning app for children from 4 to 8 years old that combines analog and
                    digital learning in a fun way
                </div>
            </div>

            {!submitted && (
                <>
                    <div className='discount'>{discountText}</div>
                    <div className='text1'>for your first EDURINO</div>
                    <div className='text2'>Enter your email</div>

                    <div className='emailContainer'>
                        <input type="email" className='emailInput' placeholder='Your email'/>
                    </div>
                    <img src={submit} className="submit" alt="submit" onClick={handleSubmit}/>

                </>
            )}

            {submitted && (
                <>
                    <div className='checkEmail'>Check your email!</div>
                    <img className="logo1" src={logo1} alt="Logo"/>
                    <img className="playAgain" src={playAgain} onClick={handleButtonClick} alt="playAgain"/>
                </>
            )}

            <img src={parentsBoard} className='parentsBoard' alt="Parents Board"/>
        </div>
    );
}

export default Parents;
