import React from 'react';
import Draggable from 'react-draggable';
import mikaPfp from '../assets/mikaPfp.png'
import './Mika.css'
import badGuy from '../assets/badGuy.png'
import h from "../assets/h.png"
import e from "../assets/e.png"
import l from "../assets/l.png"
import o from "../assets/o.png"
import cloud from "../assets/cloud.png"
import pen from "../assets/pen.png"

function Mika() {

    return (
        <>
            <div className='speechBox'>
                <div className={"speech1"}>
                    They ruined my word, help me solve it! Use pen
                </div>
                <img className={"pen"} src={pen}/>
            </div>

            <div className='cloud-container'>
                <img className={"mikaPfp"} src={mikaPfp} alt='a'/>
                <img className={"cloud"} src={cloud} alt='a'/>
                <img className={"cloud1"} src={cloud} alt='a'/>
            </div>

            <div>
                <img className={"badGuy"} src={badGuy} alt='a'/>
                <img className={"badGuy1"} src={badGuy} alt='a'/>
                <img className={"badGuy2"} src={badGuy} alt='a'/>
                <img className={"badGuy3"} src={badGuy} alt='a'/>
                <img className={"badGuy4"} src={badGuy} alt='a'/>
            </div>

            <div className={"circleH"}></div>
            <div className={"circleE"}></div>
            <div className={"circleL"}></div>
            <div className={"circleL1"}></div>
            <div className={"circleO"}></div>

            <div>
                <Draggable>
                    <img className={"h"} src={h} alt='a'/>
                </Draggable>

                <Draggable>
                    <img className={"e"} src={e} alt='a'/>
                </Draggable>

                <Draggable>
                    <img className={"l"} src={l} alt='a'/>
                </Draggable>

                <Draggable>
                    <img className={"l1"} src={l} alt='a'/>
                </Draggable>

                <Draggable>
                    <img className={"o"} src={o} alt='a'/>
                </Draggable>

            </div>
        </>
    );
}

export default Mika;