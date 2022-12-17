import React from "react";
import "../../../css/components/navBar/navBarStyles.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li onClick={changeTitle.bind(changeTitle, "Welcome to Ace Productions")} className="navOptions">
                    <Link to="/">Home</Link>
                </li>
                <li onClick={changeTitle.bind(changeTitle, "Welcome to Clover")} className="navOptions">
                    <Link to="/clover">Clover</Link>
                </li>
            </ul>
        </nav>
    );
}

function changeTitle(title){
    document.getElementById('title').innerHTML = `${title}`;
}

export default NavBar;