import helpIcon from "../assets/help-icon.svg";
import './FirstPage.css'
import badGuy from "../assets/badGuy.png"
import mika from "../assets/mika.png"
import h from "../assets/h.png"
import e from "../assets/e.png"
import l from "../assets/l.png"
import o from "../assets/o.png"
import React from "react";

const firstPage = () => {
    return (
        <>
            <img className={"helpIcon"} src={helpIcon}/>

            <div>
                <img className={"badGuy"} src={badGuy} alt='a'/>
                <img className={"badGuy1"} src={badGuy} alt='a'/>
                <img className={"badGuy2"} src={badGuy} alt='a'/>
                <img className={"badGuy3"} src={badGuy} alt='a'/>
                <img className={"badGuy4"} src={badGuy} alt='a'/>

            </div>

            <img className={"h-first"} src={h} alt='a'/>
            <img className={"e-first"} src={e} alt='a'/>
            <img className={"l-first"} src={l} alt='a'/>
            <img className={"l1-first"} src={l} alt='a'/>
            <img className={"o-first"} src={o} alt='a'/>

            <img className={"mika"} src={mika}/>

        </>
    )
}

export default firstPage