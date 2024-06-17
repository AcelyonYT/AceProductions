import React from "react";
import "../../../css/components/navBar/navBarStyles.css";
import { Link } from "react-router-dom";

export default class NavBar {
    constructor() {}

    render() {
        return (
            <nav className="navBar">
                <ul className="optionList">
                    <li className="navOptions">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="navOptions">
                        <Link to="/status">Status</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}