import React from 'react';
import { useLocation } from 'react-router-dom';
import "../../css/layouts/header.css";

export default class Header {
    constructor() {}

    render() {
        return (
            <div className="headerBox">
                <div id="titleBox" className='titleBox'>
                    { Header.createTitle() }
                </div>
            </div>
        );
    }

    static createTitle() {
        const Location = useLocation();
        switch( Location.pathname ){
            case "/home":
                return <h1 className='title'>Ace Productions</h1>
            case "/status":
                return <h1 className='title'>Status</h1>
        }
    }
}