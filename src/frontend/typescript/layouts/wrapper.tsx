import React from 'react';
import Home from '../pages/home';
import Status from '../pages/status';
import Game from '../pages/game';

const home = new Home();
const status = new Status();
const game = new Game();

let Content: any;

export default class Wrapper {
    constructor() {}

    render() {
        let curWindow: string = window.location.pathname;
        
        switch( curWindow ) {
            case "/":
                Content = home.render;
            break;
            case "/status":
                Content = status.render;
            break;
            case "/game":
                Content = game.render;
            break;
        }

        return (
            <div id="wrapper">    
                <>
                    <Content />
                </>
            </div>
        )
    }
}