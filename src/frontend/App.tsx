import React from "react";
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./typescript/layout";

const layout = new Layout();

export default class App {
    constructor() {}

    render() {
        const pathsArray: string[] = [ "/", "/status", "/game" ];
        return (
            <BrowserRouter>
                <Routes>
                    { App.createPaths( pathsArray ) }
                </Routes>
            </BrowserRouter>
        );
    }

    static createPaths( pathArray: string[] ) {
        let createdPaths: React.JSX.Element[] = pathArray.map<React.JSX.Element>(
            (x, index) => <Route key={index} path={x} element={<layout.render />}>
            </Route>
        );
        return createdPaths
    }
}