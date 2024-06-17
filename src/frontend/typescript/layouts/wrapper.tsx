import React from 'react';
import Home from '../pages/home';
import Status from '../pages/status';

const home = new Home();
const status = new Status();

let Content: any;

export default class Wrapper {
    constructor() {}

    render() {
        let curWindow: string = window.location.pathname;
        
        switch( curWindow ) {
            case "/home":
                Content = home.render;
            break;
            case "/status":
                Content = status.render;
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