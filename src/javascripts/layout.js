import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar/nav";
import Header from "./layouts/header";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
        </>
    );
}

export default Layout;