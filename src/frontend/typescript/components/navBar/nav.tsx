import React from "react";
import "../../../css/components/navBar/navBarStyles.css";
import { Link } from "react-router-dom";

export default class NavBar {
    constructor() {}

    render() {
        return (
            <nav id="navbar">
                <ul id="optionList">
                    <li onClick={NavBar.changeTitle.bind(NavBar.changeTitle, "Welcome to Ace Productions")} className="navOptions">
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={NavBar.changeTitle.bind(NavBar.changeTitle, "Welcome to the Status Page")} className="navOptions">
                        <Link to="/status">Status</Link>
                    </li>
                    <li onClick={NavBar.changeTitle.bind(NavBar.changeTitle, "Game")} className="navOptions">
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    static changeTitle( title: string ) {
        document.getElementById('title')!.innerHTML = `${title}`;
    }
}