import React from "react";
import  "./style.css"
import blindsOpen from "./img/blinds-open.svg";
import blindsClosed from "./img/blinds-closed.svg";

const Blinds = ({state}) => {
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsOpen} alt="blinds state icon" />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className="button button--active">Otevřeno</button>
                <button className="button">Zavřeno</button>
            </div>
        </div>
    )
}

export default Blinds;