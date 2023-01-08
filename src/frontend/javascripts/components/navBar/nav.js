import React from "react";
import "../../../css/components/navBar/navBarStyles.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav id="navbar">
            <ul id="optionList">
                <li onClick={changeTitle.bind(changeTitle, "Welcome to Ace Productions")} className="navOptions">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
}

function changeTitle(title){
    document.getElementById('title').innerHTML = `${title}`;
}

export default NavBar;