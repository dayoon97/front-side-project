import React from "react";
import backgroundImage from "../img/woman-football.jpg";
import "../style/intro.css";

function Intro() {
    return (
        <div className="Intro">
            <img src={backgroundImage} className="back-img"/>
        </div>
    );
}

export default Intro;