import React from 'react';
import Home from "../pages/home";
import Status from '../pages/status';

function Wrapper(){
    const curWindow = window.location.pathname;
    let Content;
    switch(curWindow) {
        case "/":
            Content = Home;
        break;
        case "/status":
            Content = Status;
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