import React from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/layouts/header.css";

export default class Header {
    constructor() {}

    render() {
        return (
            <div id="box">
                <div id="titleBox">
                    { Header.createTitle() }
                </div>
            </div>
        );
    }

    static createTitle() {
        const Location = useLocation();
        switch( Location.pathname ){
            case "/home":
                return <h1 id='title'>Ace Productions</h1>
            case "/status":
                return <h1 id='title'>Status</h1>
        }
    }
}