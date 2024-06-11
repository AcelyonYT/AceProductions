import React, { ReactNode } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./typescript/layout";

function App() {
    const pathsArray: string[] = [ "/", "/status", "/game" ];
    return (
        <BrowserRouter>
            <Routes>
                {createPaths(pathsArray)}
            </Routes>
        </BrowserRouter>
    );
}

function createPaths(pathArray: string[]) {
    let createdPaths: React.JSX.Element[] = pathArray.map<React.JSX.Element>((x, index) => <Route key={index} path={x} element={<Layout />}></Route>)
    return createdPaths
}

export default App;