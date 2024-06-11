import React from 'react';
import Home from '../pages/home';
import Status from '../pages/status';
import Game from '../pages/game';

function Wrapper() {
    const curWindow = window.location.pathname;
    let Content: any;
    switch(curWindow) {
        case "/":
            Content = Home;
        break;
        case "/status":
            Content = Status;
        break;
        case "/game":
            Content = Game;
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

export default Wrapper;