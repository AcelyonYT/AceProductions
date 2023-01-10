import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./javascripts/layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                </Route>
                <Route path="/status" element={<Layout />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;