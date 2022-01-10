import React from "react";
import backgroundImage from "../img/football.jpg";
import "../style/intro.css";

function Intro() {
    return (
        <div className="Intro">
            <img src={backgroundImage}/>
        </div>
    );
}

export default Intro;