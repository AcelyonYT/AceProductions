import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./javascripts/layout";
import Home from "./javascripts/pages/home";
import Clover from "./javascripts/pages/clover";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="clover" element={<Clover />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;