import React from "react";
import "../../../css/components/buttons/buttonStyles.css";

function Button() {
    return (
        <div>
            <button id="button" onClick={clickme}>Click Me!</button>
            <p id="changeMe">Change me with the button!</p>
        </div>
    );
}

function clickme(){
    document.getElementById("changeMe").innerText = "Good Job!";
}

export default Button;