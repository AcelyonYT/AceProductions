import React from "react";
import "../../../css/components/navBar/navBarStyles.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clover">Clover</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;